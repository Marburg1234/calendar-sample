Rails.application.routes.draw do
  root to: "events#index"
  get '/events', to: 'events#index', defaults: { format: 'json' } #この行を追記
  # get '/events/new' => "events#new"
  # post '/events' => "events#create"
  get '/events/list' => 'events#list'
  # get '/events/:id/edit' => 'events#edit'
  # patch '/events/:id' => 'events#update'
  resources :events, only: %i[new create edit update]
end
