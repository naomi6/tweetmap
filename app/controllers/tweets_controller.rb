class TweetsController < ApplicationController
  def show
    lat = request.params[:lat]
    lon = request.params[:lon]
    word = request.params[:word]
    
    @tweets = JSON.parse(RestClient.get("http://search.twitter.com/search.json", :params => { :q => "#{word}", :geocode => "#{lat},#{lon},30mi" }).body)["results"]
    #@tweets.each do |tweet|
      #location = tweet['location']
      #break if location.nil?
      #location = location[location.index(':')+1, location.length] if location.index(':')
      #break if location.index(',').nil?
      #latlng = location.split(',')
      #latitude = latlng[0]
      #longitude = latlng[1]
      
      #break if latitude !~ /^\s*[+-]?((\d+_?)*\d+(\.(\d+_?)*\d+)?|\.(\d+_?)*\d+)(\s*|([eE][+-]?(\d+_?)*\d+)\s*)$/
      #break if longitude !~ /^\s*[+-]?((\d+_?)*\d+(\.(\d+_?)*\d+)?|\.(\d+_?)*\d+)(\s*|([eE][+-]?(\d+_?)*\d+)\s*)$/
      
      #text = tweet['text']
      #time = tweet['created_at']
      #      
      #tweet = {
      #  'latitude' => Float(latitude),
      #  'longitude' => Float(longitude),
      #  'time' => time,
      #  'text' => text,
      #}.to_json
      #tweet['location'] = latlng[0]+" "+latlng[1]
      #tweet['location']['latitude'] = latlng[0]
      #tweet['location']['longitude'] = latlng[1]
      
    #end
  end
end

