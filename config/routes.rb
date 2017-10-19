Rails.application.routes.draw do

   scope '/api' do
    resources :games, only: [:index, :create, :update]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
