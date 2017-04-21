require 'sinatra'
require 'pry'
require 'pry-byebug'
require 'sinatra/reloader'

get '/hello' do
  #'hello'
  # hoge.erbを描画するときは
  erb :hoge
end

get '/json' do
  data = {
    board: [
      ['black', 'black', 'black'], 
      ['black', 'black', 'black'], 
      ['black', 'black', 'black'],
    ]
  }
  JSON.generate(data)
end


