require 'json'

file = File.read('_data/raw.json')
allBeers = JSON.parse(file)

allBeers.each do |item|
	puts item

end