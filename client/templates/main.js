import {FineRouter} from 'meteor/aadams:fine-router'
import {Template} from 'meteor/templating'



Template.main.onRendered(function() {
    this.autorun(() => {
      if ( !this.subscriptionsReady() ) {
          return;
      }
      $(document).on('click','.navbar-collapse.in',function(e) {
          if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
              $(this).collapse('hide');
          }
      });
      
      //new WOW().init()
    })
  })

Template.main.events({
  'click #scan': () => {
    FineRouter.go('scanTicket')
  }
})
