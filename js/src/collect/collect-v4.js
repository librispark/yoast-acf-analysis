var config = require( "./../config/config.js" );
var fieldSelectors = config.fieldSelectors;

var field_data = [];

var fields = jQuery('#post-body, #edittag').find(fieldSelectors.join(','));

fields.each(function() {

    var $el = jQuery(this).closest('.field');

    field_data.push({
        $el     : $el,
        key     : $el.data('field_key'),
        name    : $el.data('field_name'),
        type    : $el.data('field_type')
    });

});

module.exports = field_data;