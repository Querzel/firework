/* 
Simple Routes
*/
Router.route('/', function() {
    this.render('home');
});

Router.route('/account', function() {
    this.render('account');
});

Router.route('/timeline', function() {
    this.render('timeline');
});

Router.route('/add', function() {
    this.render('items_add');
});

Router.route('/stats', function() {
    this.render('stats');
});


/*
Items Routes
*/
Router.route('/items', function() {
    this.render('items');
});
Router.route('/items/:id', function() {
    this.render('items_show', {
        data: function() {
            var templateData = {
                item: Items.findOne({
                    "_id": this.params.id
                })
            };
            return templateData;
        }
    });
}, {
    name: 'items.show'
});

Router.route('/items/:id/edit', function() {
    this.render('items_edit', {
        data: function() {
            var templateData = {
                item: Items.findOne({
                    "_id": this.params.id
                })
            };
            return templateData;
        }
    });
}, {
    name: 'items.edit'
});


/*
Actor Routes
*/
Router.route('/actors', function() {
    this.render('actors');
});

Router.route('/actors/:actor', function() {
    this.render('actors_show', {
        data: function() {
            var templateData = {
                actor: Actors.findOne({
                    "actor": this.params.actor
                }),
                items: Items.find({
                    "actor": this.params.actor
                })
            };
            return templateData;
        }
    });
}, {
    name: 'actors.show'
});


/*
Action Routes
*/
Router.route('/actions', function() {
    this.render('actions');
});

Router.route('/actions/:action', function() {
    this.render('actions_show', {
        data: function() {
            var templateData = {
                action: Actions.findOne({
                    "action": this.params.action
                }),
                items: Items.find({
                    "action": this.params.action
                })
            };
            return templateData;
        }
    });
}, {
    name: 'actions.show'
});


/*
Units Routes
*/
Router.route('/units', function() {
    this.render('units');
});

Router.route('/units/:unit', function() {
    this.render('units_show', {
        data: function() {
            var templateData = {
                unit: Units.findOne({
                    "unit": this.params.unit
                }),
                items: Items.find({
                    "units": this.params.unit
                })
            };
            return templateData;
        }
    });
}, {
    name: 'units.show'
});