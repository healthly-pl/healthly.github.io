!function(){var t=window.WPLeafletMapPlugin;if(window.WPLeafletMapPlugin=new function(){var t=!1,n=[];this.push=function(i){t?i():n.push(i)},this.unshift=function(i){t?i():n.unshift(i)},this.init=function(){t=!0;for(var i=0,e=n.length;i<e;i++)n[i]()},this.getCurrentMap=function(){return this.maps[this.maps.length-1]},this.getCurrentGroup=function(){var t=this.maps.length;return this.markergroups[t]||(this.markergroups[t]=this.newMarkerGroup(this.maps[t-1])),this.markergroups[t]},this.getCurrentMarkerGroup=this.getCurrentGroup,this.getGroup=function(t){return(new L.FeatureGroup).addTo(t)},this.newMarkerGroup=function(t){var n=this.getGroup(t);return n.timeout=null,t._shouldFitBounds&&n.on("layeradd",(function(i){i.layer instanceof L.FeatureGroup&&i.layer.on("ready",(function(){t.fitBounds(n.getBounds())})),window.clearTimeout(this.timeout),this.timeout=window.setTimeout((function(){try{t.fitBounds(n.getBounds())}catch(t){}}),100)}),n),n};var i=this.unescape=function(t){var n=document.createElement("div");return n.innerHTML=t,n.innerText},e=/\{ *(.*?) *\}/g;this.template=function(t,n){return t.replace(e,(function(t,e){var o=function(t,n){for(var e=function(t){for(var n=t.split(r),i=[],e=0,o=n.length;e<o;e++)""!==n[e]&&i.push(n[e]);return i}(i(n)),o=t,u=0,s=e.length;u<s;u++)if(!(o=o[e[u]]))return;return o}(n,e);return void 0===o?t:o}))};var r=/[.‘’'“”"\[\]]+/g;function o(t,n){"undefined"!=typeof L&&void 0!==L[t]?n():setTimeout((function(){o(t,n)}),100)}this.waitForSVG=function(t){o("SVGIcon",t)},this.waitForAjax=function(t){o("AjaxGeoJSON",t)},this.maps=[],this.images=[],this.markergroups={},this.markers=[],this.lines=[],this.polygons=[],this.circles=[],this.geojsons=[]},t){for(var n=0,i=t.length;n<i;n++)window.WPLeafletMapPlugin.push(t[n]);for(var e in t.splice(0),t)t.hasOwnProperty(e)&&(window.WPLeafletMapPlugin[e]=t[e])}window.addEventListener?window.addEventListener("load",window.WPLeafletMapPlugin.init,!1):window.attachEvent&&window.attachEvent("onload",window.WPLeafletMapPlugin.init)}();