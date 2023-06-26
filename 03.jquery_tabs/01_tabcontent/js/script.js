$('.tab-set').each(function(){
    let topDiv=$(this);
    let anchors=topDiv.find('ul.tabs a');
    let panelDivs=topDiv.find('div.panel');
    let lastAnchor;
    let lastPanel;

    lastAnchor=anchors.filter('.on');
    lastPanel=$(lastAnchor.attr('href'))

    panelDivs.hide()
    lastPanel.show()

    anchors.click(function(e){
        e.preventDefault();
        let currentAnchor=$(this);
        let currentPanel=$(currentAnchor.attr('href'));
        lastAnchor.removeClass('on')
        currentAnchor.addClass('on')

        lastPanel.hide();
        currentPanel.show();


        lastAnchor=currentAnchor;
        lastPanel=currentPanel;

    })
})