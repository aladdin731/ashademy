Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root' 
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :index, :update]
    resource :session, only: [:create, :destroy]
    resources :courses, only: [:create, :show, :index, :update, :destroy]
    resources :requests, only:[:index, :create, :update]
    resources :reviews, only: [:index, :create]
  end
end
