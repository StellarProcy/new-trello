Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :boards
      resources :columns
      resources :cards
    end
  end
  get '*path', to: 'home#react', constraints: lambda { |req|
    req.path.exclude? 'rails/active_storage'
  }
  root "home#react"
end
