# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Course.create!({course_name: "react", description: "best react course", course_type:"Frontend", mentor_id: 5, image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png', tag_1:"tag1", tag_2:"tag2"})



User.delete_all
u1 = User.create!({username: "Demo User", password:"123123"})
u2 = User.create!({username:"user2", password:"123123"})
u3 = User.create!({username:"user3", password:"123123"})
u4 = User.create!({username:"user4", password:"123123"})
u5 = User.create!({username:"user5", password:"123123"})
u6 = User.create!({username:"user6", password:"123123"})
u7 = User.create!({username:"user7", password:"123123"})


Course.delete_all

CourseTag.destroy_all

Tag.destroy_all


  courses = {
    '1' => {
      'course_name' => 'python',
      'description' => "best python course",
      'course_type' => "Frontend",
      'mentor_id' => u1.id,
      'image_url' => 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
      'tags' => [
     'tag1_haha',
     'tag2_lala'
      ],
    },
    '2' => {
      'course_name' => 'redux',
      'description' => "best redux course",
      'course_type' => "Frontend",
      'mentor_id' => u1.id,
      'image_url' => 'https://miro.medium.com/max/800/1*4sxOPaVNwxrfZ9uxVbUaKg.jpeg',
      'tags' => [
     'tag1_haha',
     'tag2_lolo'
      ],
    },
    '3' => {
      'course_name' => 'rails',
      'description' => "best rails course",
      'course_type' => "Backend",
      'mentor_id' => u2.id,
      'image_url' => 'https://hackernoon.com/drafts/3b3t3yqt.png',
      'tags' => [
     'tag1_zozo',
     'tag2_gogo'
      ],
    },
    '4' => {
      'course_name' => 'ruby',
      'description' => "best ruby course",
      'course_type' => "Backend",
      'mentor_id' => u2.id,
      'image_url' => 'https://portswigger.net/cms/images/f5/d7/61c1d398bde7-article-main.jpg',
      'tags' => [
     'tag1_zozo',
     'tag2_gogo'
      ],
    },
    '5' => {
      'course_name' => 'resume',
      'description' => "best resume course",
      'course_type' => "Resume",
      'mentor_id' => u3.id,
      'image_url' => 'https://image.slidesharecdn.com/presentation-150219211039-conversion-gate01/95/professional-resume-open-door-to-oportunity-3-638.jpg?cb=1424380396',
      'tags' => [
     'tag1_tutu',
     'tag2_zuzu'
      ],
    },
    '6' => {
      'course_name' => 'test course',
      'description' => "best test course",
      'course_type' => "Resume",
      'mentor_id' => u1.id,
      'image_url' => 'https://www.testingtime.com/app/uploads/2017/07/Grundregeln_fuer_User_Testing-750x500.jpg',
      'tags' => [
     'tag1_tutu',
     'tag2_zuzu'
      ],
    },

  }

    courses.map do |num, stats|

        course = Course.create!(
            course_name: stats['course_name'], 
            description: stats['description'], 
            course_type: stats['course_type'], 
            mentor_id: stats['mentor_id'], 
            image_url: stats['image_url']
        )
        stats['tags'].each do |tag|
            if !Tag.where(tag_name: tag).present?
                Tag.create!(tag_name: tag)
            end
            CourseTag.create!(course_id: course.id, tag_id: Tag.find_by(tag_name: tag).id)
        end
    end

    # course1 = Course.create({course_name: "course1", description:"lala", course_type:"Frontend", mentor_id:u1.id})
    



   last_year = Date.today.prev_year.year

    Request.destroy_all
    Request.create!(
      course_id: (Course.all)[4].id,
      mentee_id: User.first.id,
      start_time: Date.parse("#{last_year.to_s}-01-01"),
      end_time: Date.parse("#{last_year.to_s}-01-02"),
      status: 'APPROVED'
    )
    Request.create!(
      course_id: (Course.all)[0].id,
      mentee_id: User.last.id,
      start_time: Date.parse("#{last_year.to_s}-01-01"),
      end_time: Date.parse("#{last_year.to_s}-01-02"),
      status: 'PENDING'
    )
    Request.create!(
      course_id: (Course.all)[1].id,
      mentee_id: User.last.id,
      start_time: Date.parse("#{last_year.to_s}-01-01"),
      end_time: Date.parse("#{last_year.to_s}-01-02"),
      status: 'PENDING'
    )








