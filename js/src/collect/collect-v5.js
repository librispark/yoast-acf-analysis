module.exports = _.map(acf.get_fields(), function(field){

    var field_data = acf.get_data(jQuery(field));
    field_data.$el = jQuery(field);
    return field_data;

});