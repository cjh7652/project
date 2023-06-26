let menu=$('.tab-menu');

function tabMenu(e){
    e.preventDefault();
    let $this=$(this);

    $this.next('ul').show().parent('li').addClass('active').siblings('li').removeClass('active').find('>ul').hide();
}
menu.find('>ul>li>a').click(tabMenu).focus(tabMenu)

