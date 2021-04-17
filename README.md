# WebUIVue
UI framework for Unreal Engine 4 projects that uses Vue.js to work with [Tracer Interactive's](https://tracerinteractive.com) Web UI plugin (https://github.com/tracerinteractive/UnrealEngine).  It's pretty bare-bones at the moment, but there's enough functionality to get you up and going.

# Setup
This assumes you have worked with Node.js and have Node.js installed.  Once you download this project, run **npm run serve** to run the project with live editing.  You can then call LoadURL() from your Web Interface object, and point it to http://localhost:8080.

To create a build of the GUI as static files, run **npm run build** and copy the files from the **dist** folder to your Unreal project's UI folder.  If you want to automate the build and have it build the files directly to your UE4 project, [read this](https://stackoverflow.com/questions/48851677/how-to-direct-vue-cli-to-put-built-project-files-in-different-directories).
# Architecture
Based on the Web UI plugin's architecture, the Web Interface widget has a method named ***call()*** that allows you to pass JSON data down to the browser, with the Function string parameter passed being the name of the method defined inside the global *ue.interface* object.  When data needs to be passed back to Unreal, there's a global *ue4()* function that can be called by JavaScript to do so.  I've simplified things a bit with the *toUE4()* and *toUEInterface()* wrapper functions that take in an object of functions and converts them to methods that either update the VueX store (with *toUEInterface()*) or updates Unreal (with *toUE4()*).
## toUEInterface()
    toUEInterface(object functionDefs, string namespace)
Objects containing methods passed to *toUEInterface()* expect a VueX mutation to be defined either in root or in a namespaced module with the method name being the same name as the VueX mutation.  So, for example a call to:
    
    ue.interface.setIsReticleOn(someBool)
defined by the following object:

    toUEInterface({
        setDisplayState: () => {},
        setIsReticleOn: () => {},
        setIsReticleFired: () => {},
        setReticleStyle: () => {},
        setReticleColor: () => {},
    }, 'hud')

will call from the VueX ***store*** object:

    store.commit('hud/setIsReticleOn', someBool)

since *setIsReticleOn* is the name of the method and ***hud*** is the namespace.
## toUE4
    toUE4(obj functionDefs)
Just like *toUEInterface()*, *toUE4()* does the same, but in reverse -- creating methods inside the ***ue.requests*** object that serves as a host for wrapper functions that call the global ***ue4()*** function.  The big difference is that *toUE4()* will automagically convert the method name from camelcase to a capitalized string and spaced on preceding caps.  For instance, if you want to start a new game as defined by the following object:

    toUE4({
        quitGame: () => {},
        newGame: () => {},
        saveGame: () => {},
        loadGame: () => {},
        pauseGame: () => {},
        resumeGame: () => {},
    })

you can call:

    ue.requests.newGame();

which will then call:

    ue4('New Game');

and *New Game* will then be the name that gets passed into your Web Interface callback as the *NameProperty*.
# Breakdown
The project is split up into three sections:
- Menu
- HUD
- Companion Phone (a.k.a. DelPhone)

Each serves as a parent component along with having its own VueX module.

## Menu
This is the menu portion of the UI encapsulated by the MenuTop.vue component.  As of now, only the following is working:
- Main Menu
    - New Game
    - Quit
- Settings (partial)
    - Only displays child menu
    - Only returns to Main Menu from Settings

## HUD
The Hud.vue component contains all the in-game UI elements.  Currently, only these are working as of now:
- Life Meter
- Reticles

### Life Meter
The Life Meter currently sits at the bottom of the screen, and the styling of it can be controlled purely via CSS inside the LifeMeter.vue component.  On top of that, there are two ***ue.interface*** methods that control its behavior:

    ue.interface.setHealth(intVal)
and
    
    ue.interface.setHealthMax(intVal)

The former sets the player's current health while the latter sets the player's maximum health value.  Both need to be called on initialization in order to work -- this was made separate since both values will be updated independently during the lifecycle of the game, and it just made sense to decouple these functions.

## Smart Phone (a.k.a. the Del Phone)
On top of a menu and HUD system, there's a "smart phone" that works like similar smart phones in a number of AAA games (think iFruit in *GTA5*).  
### Enabling the phone
The phone (mostly) just works right now, meaning apps are able to open and being able to return to the home screen upon pressing the home button.  To toggle on/off the phone on the screen, call:

    ue.interface.setIsOpen(someBool)

and the phone will display if true or hide if false.

### Creating apps
While the phone does work, the apps still needs work.  That said, the underlying groundwork is there to build apps, which is nothing more than composing with the DelPhoneApp component.  The simplest way to do so is define to your Vue component template like this:

    <template>
        <del-phone-app appname="my-app">
            <template v-slot:app-icon>
                <div class="icon">MA</div>
            </template>
            <template v-slot:app-main>
                <div class="my-app"></div>
            </template>
        </del-phone-app>
    </template>

You can, then, build off the template to create complex apps.  Please note that everything that runs inside the app will be contained within the **app-main** slot while your app icon (shown on the home screen) will be the contents inside the **app-icon** slot.  The icon area is 50px X 50px window; so, make sure your icon will display within that area. One other thing: it's imperative that you make sure your app names are unique; so, ensure that the appname you pass to DelPhoneApp is unique.

### Installing apps
Apps are now loaded as dynamic Vue components.  There's two ways you can change what apps get loaded: update the appList in main.js or have UE4 tell Vue what apps to load.  

#### Updating main.js
If you choose to modify the appList, edit the following object in /src/main.js:

    let appList = {
        DelAppMail: './components/delPhone/apps/DelAppMail.vue',
        DelAppMaps: './components/delPhone/apps/DelAppMaps.vue',
        DelAppMusic: './components/delPhone/apps/DelAppMusic.vue',
        DelAppReticle: './components/delPhone/apps/DelAppReticle.vue',
        DelAppVideoSettings: './components/delPhone/apps/DelAppVideoSettings.vue',
        DelAppCameraSetting: './components/delPhone/apps/DelAppCameraSetting.vue',
        DelAppInventory: './components/delPhone/apps/DelAppInventory.vue',
        DelAppFactions: './components/delPhone/apps/DelAppFactions.vue',
        DelAppQuests: './components/delPhone/apps/DelAppQuests.vue',
    };

This object will tell Vue what apps load in DelPhone.

#### Fully-dynamic app list
On the other hand, if you choose truly have the apps load dynamically, set appList to an empty object in /src/main.js, and then call setAppList from UE4 with an object with key-value pairs -- where that object mimics the original appList object.

#### App naming and the app list
Regardless of how you populate your apps, it's imperative that the key you use is either the PascalCase or the camelCase version of the name property of your component, which should be kebab-cased.  In other words, if you define an app with the 'DelAppWidget' key in your appList, your app component should at least have the following in its script tag:

    <script>
    export default {
        name: 'del-app-widget',
    }
    </script>

Failing to adhering to this naming rule will cause your app to fail to load.