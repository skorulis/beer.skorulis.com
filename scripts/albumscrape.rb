require 'rubygems'
require 'net/http'
require 'httpclient'
require 'json'

# Need to generate a new token every hour or so
@token = "EAACEdEose0cBAFY2IGC4ZBXv2KtrqDeY42qgkqIpzPgxVjAnPcccYkp23cqrzhVAtvQfjZBKO5HTnQToyrhmCoKFXLw0zdG9r8oJuHcr66oS2LZAifr4odWkLoihXmtOe3LjY0xmh3fkdHdQwegTusbkD3e56Ojj8VZA0KhBKuU1LbkXEtZAyZA55IcnfwAJsZD";
@albums = ["10151283325498745","10152534310003745","10154858207913745"]
@allBeers = [];
@next = ""

puts @firstUrl

def urlForAlbum(albumId)
	return "https://graph.facebook.com/v2.5/"+albumId+"?access_token="+@token + "&fields=photos.limit(150)%7Bimages,created_time,name,id,link%7D"
end

def cleanText(s)
	s = s.strip
	if s[-1,1] == "."
		s = s.slice(0,s.length-1)
	end
	return s
end

def downloadChunk(url)
    #puts url
	clnt = HTTPClient.new;
	data = clnt.get_content(url)
	result = JSON.parse(data)
	#puts result
	
	if result["photos"] == nil
		photos = result["data"];
		paging = result["paging"]
	else
		photos = result["photos"]["data"];
		paging = result["photos"]["paging"];
	end
	

	@next = paging["next"];
	
	puts photos.count
	
	count = 0;
	photos.each{|value|


	    lines = value["name"].split(/\r?\n/);
	    pct = lines[0][/[0-9]?[0-9]?(\.[0-9]{0,2})?%/]
	    if pct
	        lines[0][pct] = "";
	        pct = pct.chop
	    else
	        pct = "null"
	    end
	    
	    score = lines[1][/[0-9.]{1,3}.10/]
	    if score
	        lines[1][score] = "";
	        score = score.chop.chop.chop;
	    else
	        score = "null"
	    end


		hash = Hash[];
		hash["name"] = cleanText(lines[0])
		hash["desc"] = cleanText(lines[1])
		hash["img"] = value["images"][4]["source"];
		hash["pct"] = pct;
		hash["link"] = value["link"]
		hash["date"] = value["created_time"][0..9]

		puts hash["date"]

		hash["score"] = score;
		@allBeers.push(hash);
		count+=1;
	}
	
end

def dumpPlainJS() 
	file = File.new("js/raw.json","wb");
	file.write(JSON.pretty_generate(@allBeers))
end

def downloadData(albumId)
	firstUrl = urlForAlbum(albumId)
	downloadChunk(firstUrl);
	while @next != nil do
		downloadChunk(@next)
		#@next = ""
	end
end

@albums.each { |x| downloadData(x)}

dumpPlainJS()

puts "Successfully wrote " + @allBeers.length.to_s() + " beers";