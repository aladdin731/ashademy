# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Course.create!({course_name: "react", description: "best react course", course_type:"Frontend", mentor_id: 5, image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png', tag_1:"tag1", tag_2:"tag2"})



User.destroy_all
u1 = User.create!({username: "Demo User", password:"123123", image_url:"https://timesofindia.indiatimes.com/photo/67586673.cms"})
u2 = User.create!({username:"user2", password:"123123", image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiXuCELL9oXgqfWRGC5Z0R-D_WAEugJc7pBA&usqp=CAU"})
u3 = User.create!({username:"user3", password:"123123", image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiXuCELL9oXgqfWRGC5Z0R-D_WAEugJc7pBA&usqp=CAU"})
u4 = User.create!({username:"user4", password:"123123", image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiXuCELL9oXgqfWRGC5Z0R-D_WAEugJc7pBA&usqp=CAU"})

Review.destroy_all

Course.destroy_all

CourseTag.destroy_all

Tag.destroy_all


  courses = {
    '1' => {
      'course_name' => 'Python',
      'description' => "Best python course",
      'course_type' => "Frontend",
      'mentor_id' => u1.id,
      'image_url' => 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
      'tags' => [
     'Django',
     'Flask'
      ],
    },
    '2' => {
      'course_name' => 'Redux',
      'description' => "Best redux course",
      'course_type' => "Frontend",
      'mentor_id' => u1.id,
      'image_url' => 'https://miro.medium.com/max/800/1*4sxOPaVNwxrfZ9uxVbUaKg.jpeg',
      'tags' => [
     'Redux-thunk',
     'React'
      ],
    },
    '3' => {
      'course_name' => 'Rails',
      'description' => "Best rails course",
      'course_type' => "Backend",
      'mentor_id' => u2.id,
      'image_url' => 'https://miro.medium.com/max/400/0*hbmyPCa0Nv_YEgaS.png',
      'tags' => [
     'Ruby',
     'Rails'
      ],
    },
    '4' => {
      'course_name' => 'Ruby',
      'description' => "Best ruby course",
      'course_type' => "Backend",
      'mentor_id' => u2.id,
      'image_url' => 'https://portswigger.net/cms/images/f5/d7/61c1d398bde7-article-main.jpg',
      'tags' => [
     'Ruby',
     'Sytax'
      ],
    },
    '5' => {
      'course_name' => 'Resume',
      'description' => "Best resume course",
      'course_type' => "Resume",
      'mentor_id' => u3.id,
      'image_url' => 'https://image.slidesharecdn.com/presentation-150219211039-conversion-gate01/95/professional-resume-open-door-to-oportunity-3-638.jpg?cb=1424380396',
      'tags' => [
     'Resume',
     'Cover Letter'
      ],
    },
    '6' => {
      'course_name' => 'Testing',
      'description' => "Best testing course",
      'course_type' => "Fullstack",
      'mentor_id' => u4.id,
      'image_url' => 'https://www.testingtime.com/app/uploads/2017/07/Grundregeln_fuer_User_Testing-750x500.jpg',
      'tags' => [
     'Ruby',
     'Testing'
      ],
    },
     '7' => {
      'course_name' => 'System Design',
      'description' => "Best system design course",
      'course_type' => "System Design",
      'mentor_id' => u4.id,
      'image_url' => 'https://uxmisfit.com/wp-content/uploads/2019/03/design_systems_featured.jpg',
      'tags' => [
     'System Desigm',
     'Senior Engineer'
      ],
    },
     '8' => {
      'course_name' => 'OOD',
      'description' => "Best OOD course",
      'course_type' => "OOD",
      'mentor_id' => u1.id,
      'image_url' => 'https://i.ytimg.com/vi/AopCPq2cZlA/maxresdefault.jpg',
      'tags' => [
     'Orited object design',
     'Junior Engineer'
      ],
    },
     '9' => {
      'course_name' => 'Machine Learning',
      'description' => "Best testing course",
      'course_type' => "Data",
      'mentor_id' => u4.id,
      'image_url' => 'https://wordstream-files-prod.s3.amazonaws.com/s3fs-public/styles/simple_image/public/images/machine-learning1.png?SnePeroHk5B9yZaLY7peFkULrfW8Gtaf&itok=yjEJbEKD',
      'tags' => [
     'Machine Learning',
     'Big Data'
      ],
    },
     '10' => {
      'course_name' => 'Mock Interview',
      'description' => "Best interview course",
      'course_type' => "Interview",
      'mentor_id' => u2.id,
      'image_url' => 'https://cdn.uconnectlabs.com/wp-content/uploads/sites/17/2018/11/Mock-Interview.jpg',
      'tags' => [
     'Mock',
     'Interview'
      ],
    },
     '11' => {
      'course_name' => 'Algorithms',
      'description' => "Best testing course",
      'course_type' => "Leetcode",
      'mentor_id' => u3.id,
      'image_url' => 'https://yolken.net/assets/leetcode.png',
      'tags' => [
     'Leetcode',
     'Algorithms'
      ],
    },
     '12' => {
      'course_name' => 'Data Structure',
      'description' => "Best data structure course",
      'course_type' => "Leetcode",
      'mentor_id' => u4.id,
      'image_url' => 'https://miro.medium.com/max/1050/1*VIVTp1hgwjTHQ7cVUUQetA.png',
      'tags' => [
     'Data Structure',
     'Leetcode'
      ],
    },
     '13' => {
      'course_name' => 'Java',
      'description' => "Best java course",
      'course_type' => "Backend",
      'mentor_id' => u4.id,
      'image_url' => 'https://4a7efb2d53317100f611-1d7064c4f7b6de25658a4199efb34975.ssl.cf1.rackcdn.com/patch-or-perish-java-ftc-tells-oracle-showcase_image-1-p-2014.jpg',
      'tags' => [
     'Java',
     'Spring'
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
      mentee_id: u1.id,
      start_time: Date.parse("#{last_year.to_s}-01-01"),
      end_time: Date.parse("#{last_year.to_s}-01-02"),
      status: 'APPROVED'
    )
    Request.create!(
      course_id: (Course.all)[0].id,
      mentee_id: u4.id,
      start_time: Date.parse("#{last_year.to_s}-01-01"),
      end_time: Date.parse("#{last_year.to_s}-01-02"),
      status: 'PENDING'
    )
    Request.create!(
      course_id: (Course.all)[1].id,
      mentee_id: u4.id,
      start_time: Date.parse("#{last_year.to_s}-01-01"),
      end_time: Date.parse("#{last_year.to_s}-01-02"),
      status: 'PENDING'
    )








