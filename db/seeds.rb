# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

2.times do 
  Game.create(
    initials: "CGK",
    score: 1000,
    likes: rand(0..5)    
  )
end

2.times do 
  Game.create(
    initials: "IMKR",
    score: 1200,
    likes: rand(0..5) 
  )
end

2.times do 
  Game.create(
    initials: "MJKR",
    score: 1200,
    likes: rand(0..5) 
  )
end

2.times do 
  Game.create(
    initials: "CAR",
    score: 1000,
    likes: rand(0..5) 
  )
end
