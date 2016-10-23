require 'rubygems'
require 'json'

allBeers = JSON.parse(File.read('js/raw.json'))
extraInfo = JSON.parse(File.read('js/extra.json'))

ratings = Hash.new
untappdRatings = Hash.new
words = Hash.new
countries = Hash.new
breweries = Hash.new
scoreDiffs = 0
scoreDiffCount = 0

def createEmptyHash()
	
end

def increment(hash,key)
	if key != nil && key.length > 0
		if hash.has_key?(key)
			hash[key] = hash[key] + 1
		else
			hash[key] = 1
		end
	end
end

for x in 0..10
	ratings[x] = 0
	untappdRatings[x] = 0
end
withoutRatings = Array.new
missingPct = Array.new
missingExtra = Array.new
missingUntappdId = Array.new

allBeers.each do |item|
	name = item["name"]
	if item["score"] == "null"
		withoutRatings.push(name)
	else
		s = item["score"].to_i;
		ratings[s] = ratings[s] + 1
	end
	
	nameWords = name.split
	nameWords.each do |w|
		if !words.has_key?(w)
			words[w] = 0
		end
		words[w] = words[w] + 1
	end
	if item["pct"] == "null"
		puts name
		missingPct.push(name)
	end
	
	extra = extraInfo[name]
	untappd = extra["untappd"]
	if extra == nil
		missingExtra.push(name)
	end
	
	if untappd["id"].length == 0
		
		missingUntappdId.push(name)
	end
	
	if untappd["country"]
		increment(countries,untappd["country"])
		increment(breweries,untappd["brewery"])
		if item["score"] != "null"
			uRating = untappd["score"] * 2 
			scoreDiffs += uRating - item["score"].to_f
			untappdRatings[uRating.to_i] += 1
			scoreDiffCount += 1
		end
	end
	
end

puts "missing ratings " + withoutRatings.length.to_s
puts "missing pct " + missingPct.length.to_s
puts "missing extra " + missingExtra.length.to_s
puts "missing untappdId " + missingUntappdId.length.to_s
puts "avg rating diff = " + (scoreDiffs/scoreDiffCount).to_s
puts countries
puts ratings
puts untappdRatings