# WebUIVue
UI framework for Unreal Engine 4 projects that uses Vue.js to work with [Tracer Interactive's](https://tracerinteractive.com) Web UI plugin (https://github.com/tracerinteractive/UnrealEngine).  It's pretty bare-bones at the moment, but there's enough functionality to get you up and going.

## Architecture
Based on the Web UI plugin's architecture, the Web Interface widget has a method named ***call()*** that allows you to pass JSON data down to the browser, with the Function string parameter passed being the name of the method defined inside the global *ue.interface* object.  When data needs to be passed back to Unreal, there's a global *ue4()* function that can be called by JavaScript to do so.  I've simplified things a bit with the *toUE4()* and *toUEInterface()* wrapper functions that take in an object of functions and converts them to methods that either update the VueX store (with *toUEInterface()*) or updates Unreal (with *toUE4()*).
### toUEInterface()
    toUEInterface(object functionDefs, string namespace)
Objects containing methods passed to *toUEInterface()* expect a VueX mutation to be defined either in root or in a namespaced module with the method name being the same name as the VueX mutation.  So, for example a call to:
    
    ue.interface.setIsReticleOn(value)
defined by the following object:

    toUEInterface({
        setDisplayState: () => {},
        setIsReticleOn: () => {},
        setIsReticleFired: () => {},
        setReticleStyle: () => {},
        setReticleColor: () => {},
    }, 'hud')

will call from the VueX ***store*** object:

    store.commit('hud/setIsReticleOn', value)

since *setIsReticleOn* is the name of the method and ***hud*** is the namespace.
### toUE4
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
## Breakdown
The project is split up into three sections:
- Menu
- HUD
- Companion Phone (a.k.a. DelPhone)

Each serves as a parent component along with having its own VueX module.

### Menu
This is the menu portion of the UI encapsulated by the MenuTop.vue component.  As of now, only the following is working:
- Main Menu
    - New Game
    - Quit
- Settings (partial)
    - Only displays child menu
    - Only returns to Main Menu from Settings

### HUD
The Hud.vue component contains all the in-game UI elements.  Currently, only these are working as of now:
- Life Meter
- Reticles

