import store from '../store';

const ue = {};

const uuidv4 = function() {
    // RFC4122
    return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, function(c) {
        return (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16);
    });
};

const ue4 = (function(register) {
    if (typeof ue.interface !== "object" || typeof ue.interface.broadcast !== "function") {
        // mobile
        ue.interface = {
            broadcast: () => {}
        };

        return function(name, data, callback, timeout) {
            if (typeof name !== "string")   return;

            if (typeof data == "function") {
                timeout  = callback;
                callback = data;
                data     = null;
            }

            var uuid = register(callback, timeout);
            var args = [name, "", uuid];

            if (typeof data != "undefined")     args[1] = data;

            var hash = encodeURIComponent(JSON.stringify(args));
            if (typeof history == "object" && typeof history.pushState == "function") {
                history.pushState({}, "", "#" + hash);
                history.pushState({}, "", "#" + encodeURIComponent("[]"));
            } else {
                document.location.hash = hash;
                document.location.hash = encodeURIComponent("[]");
            }
        };
    }

    return (function(intf) {
        // desktop
        // ue.interface = {};
        intf = intf || {};

        return function(name, data, callback, timeout) {
            if (typeof name !== "string") return;

            if (typeof data === "function") {
                timeout  = callback;
                callback = data;
                data     = null;
            }

            var uuid = register(callback, timeout);

            if (typeof data !== "undefined") intf.broadcast(name, JSON.stringify(data), uuid);
            else                             intf.broadcast(name, "", uuid);
        };
    })(ue.interface);
})(function(callback, timeout) {
    if (typeof callback !== "function")
        return "";

    var uuid = uuidv4();
    ue.interface[uuid] = callback;

    setTimeout(function() {
        delete ue.interface[uuid];
    },
    1000 * Math.max(1, parseInt(timeout) || 0));

    return uuid;
});

const capitalize = s => s.charAt(0).toUpperCase() + s.slice(1);

/**
 * @description convenience method to create functions that sends data to UE4.  Generates a method that takes the form
 *              ue.requests.{methodName}(), which is a wrapper for ue4({methodNameFormatted}).  This takes the method name
 *              and reformats it as a capitalized and spaced name when passed to ue4().  For example, if the method name is
 *              updateUnrealAction, the new method will call ue4('Update Unreal Action') when invoked.
 * @param {*} obj 
 */
const toUE4 = (obj) => {
    let out = {};
    for(let i in obj) {
        if (obj.hasOwnProperty(i) && typeof obj[i] === 'function') {
            //copy our initial method for later use
            const tmp = obj[i];
            //define our new method inside ue.requests that will be used to update UE4 of changes in the UI
            out[i] = (val) => {
                const req = i.split(/(?=[A-Z]+[^A-Z])/).map(v => capitalize(v)).join(' ').replace(/\s+/g, ' ');
                //call the declared function
                tmp(val);
                //pass our data back to UE4
                ue4(req, val || false);
            };
        }
    }
    return out;
}

/**
 * @description convenience method to create callbacks that UE4 can call to update VueX store & UI.  
 *              Generates a method that takes the format ue.interface.{methodName}(), which calls the VueX
 *              mutation store.commit({methodName}, value).  It also calls the originally-defined object method.
 * @param {*} obj VueX store module
 * @param {*} prefix VueX module prefix
 */
const toUEInterface = (obj, prefix) => {
    let out = {};
    prefix = prefix ? prefix + '/' : '';
    
    for (let i in obj) {
        if (obj.hasOwnProperty(i) && typeof obj[i] === 'function') {
            //copy our initial method for later use
            const tmp = obj[i];
            out[i] = (val) => {
                //call the declared method
                tmp(val);
                //commit the new value to the VueX store
                store.commit(prefix + i, val);
            }
        }
    }
    return out;
};
export {ue, ue4, toUE4, toUEInterface};