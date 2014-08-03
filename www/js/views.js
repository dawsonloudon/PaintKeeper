var views = {};

views.default = function(template) {
//inventory list

    this.initialize = function() {
        cache.currentView = 'default';
        this.el = $('<div/>');
        this.el.attr('id','default');
        this.el.on('click', '#switch', this.toShopping);
        this.el.on('click', '#add', this.toAdd);
        this.el.on('click', 'li', this.options);
    }

    this.render = function() {
        var parts = {
            title: 'Default View'
        };
        this.el.html(template(parts));
        return this;
    }

    this.toShopping = function() {
        app.slider.slidePageFrom(new views.shopping(app.tpl.shopping), 'right');
    }

    this.toAdd = function() {
        //scanner first, then this
        app.slider.slidePageFrom(new views.addToInventory(app.tpl.addToInventory), 'right');
    }

    this.options = function() {
        navigator.notification.confirm('Pick juan of this', function(){},'Select One',['Edit','Need','Delete']);
    }

    this.initialize();

}

views.shopping = function(template) {

    this.initialize = function() {
        cache.currentView = 'shopping';
        this.el = $('<div/>');
        this.el.attr('id','default');
        this.el.on('click', '#switch', this.toInventory);
        this.el.on('click', '#add', this.options);
    }

    this.render = function() {
        var parts = {
            title: 'Shopping View'
        };
        this.el.html(template(parts));
        return this;
    }

    this.toInventory = function() {
        app.slider.slidePageFrom(new views.default(app.tpl.default), 'right');
    }

    this.options = function() {
        navigator.notification.confirm('Pick juan of this', function(){},'Select One',['Scan','From inventory']);
    }

    this.initialize();

}

views.addToInventory = function(template) {

    this.initialize = function() {
        cache.currentView = 'add to inventory';
        this.el = $('<div/>');
        this.el.attr('id','default');
        this.el.on('click', '.save, .cancel', this.toInventory);
    }

    this.render = function() {
        var parts = {
            title: 'Add to Inventory View'
        };
        this.el.html(template(parts));
        return this;
    }

    this.toInventory = function() {
        app.slider.slidePageFrom(new views.default(app.tpl.default), 'right');
    }

    this.initialize();

}

views.aeShopping = function(template) {

    this.initialize = function() {
        cache.currentView = 'ad shopping';
        this.el = $('<div/>');
        this.el.attr('id','default');
    }

    this.render = function() {
        var parts = {
            title: 'Add/Edit Shopping View'
        };
        this.el.html(template(parts));
        return this;
    }

    this.initialize();

}

views.scan = function(template) {

    this.initialize = function() {
        cache.currentView = 'scan';
        this.el = $('<div/>');
        this.el.attr('id','default');
    }

    this.render = function() {
        var parts = {
            title: 'Scan View'
        };
        this.el.html(template(parts));
        return this;
    }

    this.initialize();

}

views.noConnection = function(template) {

    this.initialize = function() {
        cache.currentView = 'no-connection';
        this.el = $('<div/>');
        this.el.attr('id','no-connection');
    }

    this.render = function() {
        var parts = {
            title: 'No Connection Detected'
        };
        this.el.html(template(parts));
        return this;
    }

    this.initialize();

}