Rails.application.routes.draw do
  get '/query', to: 'application#query'
  get '/', to: 'graphql#query'
end
