var attachmentCache = require( "./../cache/cache.attachments.js" );
var cache = require( "./../cache/cache.js" );
var scrapers = require( "./../scraper-store.js" );

var Scraper = function() {};

Scraper.prototype.scrape = function(fields){

    var that = this;

    var attachment_ids = [];

    fields = _.map(fields, function(field){

        if(field.type !== 'image'){
            return field;
        }

        field.content = '';

        var attachment_id = field.$el.find('input[type=hidden]').val();

        attachment_ids.push(attachment_id);

        if(cache.get(attachment_id, 'attachment')){

            var attachment = cache.get(attachment_id, 'attachment');

            field.content += '<img src="' + attachment.url + '" alt="ign ' + attachment.alt + '" title="' + attachment.title + '">';

        }


        return field;
    });

    attachmentCache.refresh(attachment_ids);

    return fields;

};

module.exports = Scraper;