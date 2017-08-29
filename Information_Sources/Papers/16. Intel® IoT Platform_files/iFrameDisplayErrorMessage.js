
var iframeDisplayError = iframeDisplayError || {};

iframeDisplayError = (function () {
    var submittedForms, formNameSeparator;
    submittedForms = "";
    formNameSeparator = "-";

    //check if the custom error should be displayed instead of eloqua fixed error message
    function onLoadIframe(iframe) {
        var time = $("body").find("#timeEloqua").text();
        if (submittedForms.length != 0) {
            removeLoadedIframeName(iframe.id);
            var iFrameId = $("#" + iframe.id);
            setTimeout(function () {
                try {
                    iFrameId.contents().find('form').find('p');
                } catch (e) {
                    spinnerController.stopLoading(iFrameId);
                    iFrameId.parent().find('p').show();//show custom error message
                    iFrameId.remove();//remove error message from eloqua
                }
            }, time);
            spinnerController.stopLoading(iFrameId);
        }
    }

    //save which form have been submitted
    function setFormNamesSubmitted(name) {
        submittedForms += name + formNameSeparator;
    }

    //remove the form that is already checked and loaded
    function removeLoadedIframeName(iFrameId) {
        submittedForms.replace(iFrameId + formNameSeparator, "");
    }

    return {
        onLoadIframe: onLoadIframe,
        setFormNamesSubmitted: setFormNamesSubmitted,
        removeLoadedIframeName: removeLoadedIframeName
    };
})();