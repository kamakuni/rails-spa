Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'sessions/new'
      get 'cards/index'
      get 'cards/create'
      get 'lists/index'
      get 'lists/create'
      get '/users' => 'users#index'
#      get 'users/create'
      post '/signup' => 'users#create'
      post '/login' => 'sessions#create'
      delete '/logout' => 'sessions#destory'
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
