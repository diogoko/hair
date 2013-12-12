/* hair v1.0.0 | (c) 2013 Diogo Kollross | github.com/diogoko/hair/blob/master/LICENSE */
window.hair = function(template, data) {
    data = data || {};
    return template.replace(
        /\{\{(\w+)\}\}/g,
        function(_, name) {
            return (data[name] == null) ? "" : data[name];
        }
    );
};
