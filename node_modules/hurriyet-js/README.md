# hurriyet-js

## Initializing the API

1. Install the package;
	
	    npm install --save hurriyet-js

2. Initialize hurriyet-js
	
		var hurriyet = require("hurrriyet-js")

        var api = hurriyet("API-KEY-HERE");

3. For Articles

        api.articles(function(res){

            console.log(res);

        });

4. For Single Article

        api.article('40322757',function(res){

            console.log(res);

        });

5. For Columns

        api.columns(function(res){

            console.log(res);

        });

6. For Single Column

        api.column('40321556',function(res){

            console.log(res);

        });

7. For Search

        api.search('hackathon',function(res){

            console.log(res);

        });

## Articles Defaults Fields
	 1. Id
     2. ContentType
     3. CreatedDate
     4. Title
     5. Description
     6. Text
     7. Editor
     8. Files
     9. Path
     10. RelatedNews
     11. Tags
     12. Url
     13. Writers

## Columns Defaults Fields
	 1. Id
     2. ContentType
     3. Fullname
     4. Title
     5. Description
     6. Text
     7. Files
     8. Path
     9. Url

## Search Defaults Fields
	 1. Id
     2. ContentType
     3. ModifiedDate
     4. Title
     5. Description
     6. Text
     7. Files
     8. Path
     9. RelatedNews
     10. Tags
     11. Url
     12. Writers

**NOTE :** If you want select different field,skip or top parameters, send options parameters to single methods:

        api.article('40322757',{skip:20,top:40,columns['Id','Title']},function(res){

            console.log(res);

        });

For Api Key and Api Documents : https://developers.hurriyet.com.tr/

Developed by aguleroglu