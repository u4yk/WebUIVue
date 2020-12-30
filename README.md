# WebUIVue
UI framework for Unreal Engine 4 projects that uses Vue.js to work with [Tracer Interactive's](https://tracerinteractive.com) [Web UI plugin] (https://github.com/tracerinteractive/UnrealEngine).  It's pretty bare-bones at the moment, but there's enough functionality to get you up and going.

##Breakdown
The project is split up into three sections

##Flow

graph LR
A[UE4(WebUI Plugin)] -- ue.interface --> B[Browser(Vue.js)]
B -- ue.requests --> A