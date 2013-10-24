var readyStateCheckInterval = setInterval(function() {
    if ($('.ego_section').length > 0) {
        clearInterval(readyStateCheckInterval);
        injectJobs();
    }
}, 1000);
