Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  namespace :v1, defaults: { format: 'json' } do
    get 'messages', to: 'messages#index'
  end

  # forward all non-API and non-Ajax requests to our React App
  get "*page", to: "static#index", constraints: ->(req) do
    !req.xhr? && req.format.html?
  end

  root "static#index"
end
