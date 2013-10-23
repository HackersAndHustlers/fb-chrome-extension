function capitaliseFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

        $('.ego_section .uiHeaderTopBorder .uiHeaderTitle:first').text('Hackers and Hustlers Jobs');
        $('.ego_section .uiHeaderTopBorder .uiHeaderActions:first').attr('href', 'http://jobs.hackersandhustlers.org/');
        $('.ego_section .uiHeaderTopBorder .uiHeaderActions:first').attr('target', '_blank');

        $('.ego_section:not(.ego_section:first)').remove();
        $('.pagelet_ego_pane').remove();

        $('.ego_section .ego_unit_container').empty();

        $.ajax({
            'url': 'http://apiweb.io/api/nathancahill/hh/jobs'
        }).done(function(d) {
            for (x=0;x<10;x++) {
                var location = d['results'][x]['location'];
                var startup = d['results'][x]['startup'];
                var title = d['results'][x]['title'];
                var link = d['results'][x]['link'];
                var type = d['results'][x]['type'];

                $('.ego_section .ego_unit_container').append(' \
                    <div class="clearfix ego_unit"> \
                        <a class="_8o _8s lfloat" href="http://jobs.hackersandhustlers.org' + link + '" tabindex="-1" aria-hidden="true"> \
                            <div class="listMemberFacepileNormal listMemberFacepile"> \
                                <img style="width:51px;height:51px;" src="' + location + '" alt=""> \
                            </div> \
                        </a> \
                        <div class="_42ef"> \
                            <div class="egoProfileTemplate"> \
                                <a class="ego_title" href="http://jobs.hackersandhustlers.org' + link + '" target="_blank">' + startup + ' - ' + capitaliseFirstLetter(type) + '</a> \
                                <div> \
                                    <div class="fsm fwn fcg"> \
                                        <p>' + title + '</p> \
                                    </div> \
                                </div> \
                            </div> \
                        </div> \
                    </div> \
                ');
            }
        });
	}
	}, 10);
});
