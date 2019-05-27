Rails.application.routes.draw do

  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  #  root 'home#index'
  # devise instructions say to use this:
  root to: "home#index"

  get '/servicerecords' => 'home#servicerecords'

  get '/serviceitem' => 'home#serviceitem'

end
