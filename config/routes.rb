Rails.application.routes.draw do

   scope '/api' do
    get :games, to: 'games#index'
    post :games, to: 'games#create'
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
