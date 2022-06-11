Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'cards/index'
      get 'cards/create'
    end
  end
  namespace :api do
    namespace :v1 do
      get 'lists/index'
      get 'lists/create'
    end
  end
  namespace :api do
    namespace :v1 do
      get 'users/index'
      get 'users/create'
    end
  end
  namespace :api do
    namespace :v1 do
      
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
