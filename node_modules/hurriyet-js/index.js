const odata = require('odata-client');
var striptags = require('striptags');

var hurriyet = function(api_key){

    var self = {}

    self.url = 'https://api.hurriyet.com.tr/v1';

    self.api_key = api_key;

    function post_process(options,callback,response){

        var obj = JSON.parse(response.body);

        if(obj.Text!=undefined || obj.Text!=null){
            obj.StripedText = striptags(obj.Text);
        }

        callback(obj);
    }
    function generate_odata(resource,id){
        var res = resource;

        if(id!=undefined || id!=null){
            res = res+"/"+id;
        }

        return odata({service: self.url, resources:res ,headers:{apikey:self.api_key}});;
    }

    function get_list(resource,o,c){

        var defaults = {
            skip: 0,
            top: 50,
        };

        if(o!=undefined && c!=undefined){
            if(o.skip==null || o.skip==undefined){
                o.skip = defaults.skip;
            }

            if(o.top==null || o.top==undefined){
                o.top = defaults.top;
            }
        }

        if(c==undefined){
            c = o;
            o = defaults
        }

        var q = generate_odata(resource);
        
        q.skip(o.skip).top(o.top).get().then(function(res){

            post_process(o,c,res);
            
        });

    }

    function get_single(resource,id,columns,o,c){

    var defaults = {
                columns : columns
            };

        if(o!=undefined && c!=undefined){

            if(o.columns==null || o.columns==undefined){
                o.columns = defaults.columns;
            }
        }

        if(c==undefined){
            c = o;
            o = defaults
        }

        var q = generate_odata(resource,id);

        if(o.columns!=null){
            for(i in o.columns){
                q.select(o.columns[i]);
            }
        }

        q.get().then(function(res){
            
            post_process(o,c,res);

        });
    }

    self.articles = function(o,c){
        
         get_list("articles",o,c);

    }

    self.article = function(id,o,c){

        get_single("articles",id,null,o,c);
        
    }

    self.columns = function(o,c){

         get_list("columns",o,c);
    }

    self.column = function(id,o,c){

        get_single("columns",id,null,o,c);
    }

    self.search = function(keyword,o,c){

        var defaults = {
                skip: 0,
                top: 50,
                columns : null
            };

        if(o!=undefined && c!=undefined){
            if(o.skip==null || o.skip==undefined){
                o.skip = defaults.skip;
            }

            if(o.top==null || o.top==undefined){
                o.top = defaults.top;
            }

             if(o.columns==null || o.columns==undefined){
                o.columns = defaults.columns;
            }
        }

        if(c==undefined){
            c = o;
            o = defaults;
        }

        var q = generate_odata("search",keyword);

        for(i in o.columns){
            q.select(o.columns[i]);
        }

        q.skip(o.skip).top(o.top).get().then(function(res){
            
            post_process(o,c,res);

        });
    }

    return self;
}

module.exports = hurriyet;