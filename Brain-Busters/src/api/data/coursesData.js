import course1Img from "../../assets/Images/courses1.png";
import course2Img from "../../assets/Images/courses2.png";
import course3Img from "../../assets/Images/courses3.png";
import course4Img from "../../assets/Images/courses4.png";
import DocImg from '../../assets/Images/docter.png';
import watch1Img from "../../assets/Images/watch.png";
import watch2Img from "../../assets/Images/watch2.jpg";
import watch3Img from "../../assets/Images/watch3.jpg";
import watch4Img from "../../assets/Images/watch4.jpg";


const courses =[
  {
    "id": 1,
    "category": "Physiotherapy",
    "title": "Introduction to Physiotherapy",
    "modules": 10,
    "instructor": "Dr. Alice Brown",
    "instructorImg" : DocImg,
    "price": "$120",
    "image": course1Img,
    "img" : watch1Img,
    "difficulty": "Beginner",
    "language": "English",
    "subtitles": ["English", "Hindi"],
    "duration": "8 hours 30 minutes",
    "certificate": true,
    "reviews": 1250,
    "rating": 4.6,
    "description":    [
     `Qorem ipsum dolor sit amet, consectetur adipiscing elit.
      Etiam eu turpis molestie, dictum est a, mattis tellus.
      Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. 
      Maecenas eget condimentum velit, sit amet feugiat lectus.
      Class aptent taciti sociosqu ad litora torquent per conubia nostra,
      per inceptos himenaeos. Praesent auctor purus luctus enim egestas,
      ac scelerisque ante pulvinar. Donec ut rhoncus ex. 
      Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem.
      Morbi convallis convallis diam sit amet lacinia.
      Aliquam in elementum tellus. `, 
      
     `Curabitur tempor quis eros tempus lacinia. 
      Nam bibendum pellentesque quam a convallis.
      Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis.
      Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum.
      Morbi a eleifend magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh.
      Mauris sit amet magna non ligula vestibulum eleifend.
      Nulla varius volutpat turpis sed lacinia. Nam eget mi in purus lobortis eleifend.
      Sed nec ante dictum sem condimentum ullamcorper quis venenatis nisi. 
      Proin vitae facilisis nisi, ac posuere leo.`
  ]
  },
  {
    "id": 2,
    "category": "Physiotherapy",
    "title": "Advanced Manual Therapy",
    "modules": 15,
    "difficulty": "Advanced",
    "instructor": "Dr. Alice Brown",
      "instructorImg" : DocImg,
    "price": "$120",
    "image": course2Img,
     "img" : watch2Img,
    "language": "English",
    "subtitles": ["English", "Spanish"],
    "duration": "12 hours 15 minutes",
    "certificate": true,
    "reviews": 980,
    "rating": 4.7,
    "description":  [
    `Qorem ipsum dolor sit amet, consectetur adipiscing elit.
     Etiam eu turpis molestie, dictum est a, mattis tellus.
      Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. 
      Maecenas eget condimentum velit, sit amet feugiat lectus.
       Class aptent taciti sociosqu ad litora torquent per conubia nostra,
       per inceptos himenaeos. Praesent auctor purus luctus enim egestas,
       ac scelerisque ante pulvinar. Donec ut rhoncus ex. 
       Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem.
        Morbi convallis convallis diam sit amet lacinia.
     Aliquam in elementum tellus.`,

    `Curabitur tempor quis eros tempus lacinia. 
     Nam bibendum pellentesque quam a convallis.
     Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis.
      Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum.
      Morbi a eleifend magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh.
      Mauris sit amet magna non ligula vestibulum eleifend.
       Nulla varius volutpat turpis sed lacinia. Nam eget mi in purus lobortis eleifend.
        Sed nec ante dictum sem condimentum ullamcorper quis venenatis nisi. 
        Proin vitae facilisis nisi, ac posuere leo.`
  ]
  },
  {
    "id": 3,
    "category": "Physiotherapy",
    "title": "Exercise Therapy",
    "modules": 12,
    "instructor": "Dr. Alice Brown",
    "instructorImg" : DocImg,
    "price": "$120",
    "image": course3Img,
     "img" : watch3Img,
    "difficulty": "Moderate",
    "language": "English",
    "subtitles": ["English"],
    "duration": "9 hours 20 minutes",
    "certificate": true,
    "reviews": 890,
    "rating": 4.5,
    "description":  [
    `Qorem ipsum dolor sit amet, consectetur adipiscing elit.
     Etiam eu turpis molestie, dictum est a, mattis tellus.
      Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. 
      Maecenas eget condimentum velit, sit amet feugiat lectus.
       Class aptent taciti sociosqu ad litora torquent per conubia nostra,
       per inceptos himenaeos. Praesent auctor purus luctus enim egestas,
       ac scelerisque ante pulvinar. Donec ut rhoncus ex. 
       Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem.
        Morbi convallis convallis diam sit amet lacinia.
     Aliquam in elementum tellus.`,

    `Curabitur tempor quis eros tempus lacinia. 
     Nam bibendum pellentesque quam a convallis.
     Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis.
      Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum.
      Morbi a eleifend magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh.
      Mauris sit amet magna non ligula vestibulum eleifend.
       Nulla varius volutpat turpis sed lacinia. Nam eget mi in purus lobortis eleifend.
        Sed nec ante dictum sem condimentum ullamcorper quis venenatis nisi. 
        Proin vitae facilisis nisi, ac posuere leo.`
  ]
  },
  {
    "id": 4,
    "category": "Physiotherapy",
    "title": "Electrotherapy Techniques",
    "modules": 9,
    "difficulty": "Beginner",
    "language": "English",
    "instructor": "Dr. Alice Brown",
      "instructorImg" : DocImg,
    "price": "$160",
    "image": course4Img,
     "img" : watch4Img,
    "subtitles": ["English", "French"],
    "duration": "7 hours 50 minutes",
    "certificate": false,
    "reviews": 600,
    "rating": 4.3,
    "description": [
    `Qorem ipsum dolor sit amet, consectetur adipiscing elit.
     Etiam eu turpis molestie, dictum est a, mattis tellus.
      Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. 
      Maecenas eget condimentum velit, sit amet feugiat lectus.
       Class aptent taciti sociosqu ad litora torquent per conubia nostra,
       per inceptos himenaeos. Praesent auctor purus luctus enim egestas,
       ac scelerisque ante pulvinar. Donec ut rhoncus ex. 
       Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem.
        Morbi convallis convallis diam sit amet lacinia.
     Aliquam in elementum tellus.`,

    `Curabitur tempor quis eros tempus lacinia. 
     Nam bibendum pellentesque quam a convallis.
     Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis.
      Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum.
      Morbi a eleifend magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh.
      Mauris sit amet magna non ligula vestibulum eleifend.
       Nulla varius volutpat turpis sed lacinia. Nam eget mi in purus lobortis eleifend.
        Sed nec ante dictum sem condimentum ullamcorper quis venenatis nisi. 
        Proin vitae facilisis nisi, ac posuere leo.`
  ]
  },
  {
    "id": 5,
    "category": "Physiotherapy",
    "title": "Orthopedic Physiotherapy",
    "modules": 14,
    "difficulty": "Advanced",
    "language": "English",
    "instructor": "Dr. Alice Brown",
    "instructorImg" : DocImg,
    "price": "$160",
    "image": course4Img,
     "img" : watch4Img,
    "subtitles": ["English", "German"],
    "duration": "11 hours 40 minutes",
    "certificate": true,
    "reviews": 740,
    "rating": 4.6,
    "description":  [
    `Qorem ipsum dolor sit amet, consectetur adipiscing elit.
     Etiam eu turpis molestie, dictum est a, mattis tellus.
      Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. 
      Maecenas eget condimentum velit, sit amet feugiat lectus.
       Class aptent taciti sociosqu ad litora torquent per conubia nostra,
       per inceptos himenaeos. Praesent auctor purus luctus enim egestas,
       ac scelerisque ante pulvinar. Donec ut rhoncus ex. 
       Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem.
        Morbi convallis convallis diam sit amet lacinia.
     Aliquam in elementum tellus.`,

    `Curabitur tempor quis eros tempus lacinia. 
     Nam bibendum pellentesque quam a convallis.
     Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis.
      Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum.
      Morbi a eleifend magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh.
      Mauris sit amet magna non ligula vestibulum eleifend.
       Nulla varius volutpat turpis sed lacinia. Nam eget mi in purus lobortis eleifend.
        Sed nec ante dictum sem condimentum ullamcorper quis venenatis nisi. 
        Proin vitae facilisis nisi, ac posuere leo.`
  ]
  },
  {
    "id": 6,
    "category": "Physiotherapy",
    "title": "Neurological Physiotherapy",
    "modules": 13,
    "difficulty": "Advanced",
    "language": "English",
    "subtitles": ["English"],
    "duration": "10 hours 55 minutes",
    "certificate": true,
    "reviews": 920,
    "instructor": "Dr. Alice Brown",
      "instructorImg" : DocImg,
    "price": "$200",
    "image": course3Img,
     "img" : watch3Img,
    "rating": 4.7,
    "description": [
    `Qorem ipsum dolor sit amet, consectetur adipiscing elit.
     Etiam eu turpis molestie, dictum est a, mattis tellus.
      Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. 
      Maecenas eget condimentum velit, sit amet feugiat lectus.
       Class aptent taciti sociosqu ad litora torquent per conubia nostra,
       per inceptos himenaeos. Praesent auctor purus luctus enim egestas,
       ac scelerisque ante pulvinar. Donec ut rhoncus ex. 
       Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem.
        Morbi convallis convallis diam sit amet lacinia.
     Aliquam in elementum tellus.`,

    `Curabitur tempor quis eros tempus lacinia. 
     Nam bibendum pellentesque quam a convallis.
     Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis.
      Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum.
      Morbi a eleifend magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh.
      Mauris sit amet magna non ligula vestibulum eleifend.
       Nulla varius volutpat turpis sed lacinia. Nam eget mi in purus lobortis eleifend.
        Sed nec ante dictum sem condimentum ullamcorper quis venenatis nisi. 
        Proin vitae facilisis nisi, ac posuere leo.`
  ]
  },
  {
    "id": 7,
    "category": "Physiotherapy",
    "title": "Cardiopulmonary Physiotherapy",
    "modules": 10,
    "difficulty": "Moderate",
    "language": "English",
    "subtitles": ["English", "Hindi"],
    "duration": "8 hours 20 minutes",
    "certificate": true,
    "instructor": "Dr. Alice Brown",
      "instructorImg" : DocImg,
    "price": "$140",
    "image": course2Img,
     "img" : watch2Img,
    "reviews": 810,
    "rating": 4.4,
    "description":  [
    `Qorem ipsum dolor sit amet, consectetur adipiscing elit.
     Etiam eu turpis molestie, dictum est a, mattis tellus.
      Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. 
      Maecenas eget condimentum velit, sit amet feugiat lectus.
       Class aptent taciti sociosqu ad litora torquent per conubia nostra,
       per inceptos himenaeos. Praesent auctor purus luctus enim egestas,
       ac scelerisque ante pulvinar. Donec ut rhoncus ex. 
       Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem.
        Morbi convallis convallis diam sit amet lacinia.
     Aliquam in elementum tellus.`,

    `Curabitur tempor quis eros tempus lacinia. 
     Nam bibendum pellentesque quam a convallis.
     Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis.
      Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum.
      Morbi a eleifend magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh.
      Mauris sit amet magna non ligula vestibulum eleifend.
       Nulla varius volutpat turpis sed lacinia. Nam eget mi in purus lobortis eleifend.
        Sed nec ante dictum sem condimentum ullamcorper quis venenatis nisi. 
        Proin vitae facilisis nisi, ac posuere leo.`
  ]
  },
  {
    "id": 8,
    "category": "Physiotherapy",
    "title": "Geriatric Physiotherapy",
    "modules": 11,
      "instructorImg" : DocImg,
    "difficulty": "Moderate",
    "language": "English",
    "subtitles": ["English"],
    "duration": "8 hours 10 minutes",
    "certificate": true,
    "instructor": "Dr. Alice Brown",
    "price": "$140",
    "image": course1Img,
     "img" : watch1Img,
    "reviews": 720,
    "rating": 4.5,
    "description":  [
    `Qorem ipsum dolor sit amet, consectetur adipiscing elit.
     Etiam eu turpis molestie, dictum est a, mattis tellus.
      Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. 
      Maecenas eget condimentum velit, sit amet feugiat lectus.
       Class aptent taciti sociosqu ad litora torquent per conubia nostra,
       per inceptos himenaeos. Praesent auctor purus luctus enim egestas,
       ac scelerisque ante pulvinar. Donec ut rhoncus ex. 
       Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem.
        Morbi convallis convallis diam sit amet lacinia.
     Aliquam in elementum tellus.`,

    `Curabitur tempor quis eros tempus lacinia. 
     Nam bibendum pellentesque quam a convallis.
     Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis.
      Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum.
      Morbi a eleifend magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh.
      Mauris sit amet magna non ligula vestibulum eleifend.
       Nulla varius volutpat turpis sed lacinia. Nam eget mi in purus lobortis eleifend.
        Sed nec ante dictum sem condimentum ullamcorper quis venenatis nisi. 
        Proin vitae facilisis nisi, ac posuere leo.`
  ]
  },
  {
    "id": 9,
    "category": "Physiotherapy",
    "title": "Pediatric Physiotherapy",
    "modules": 12,
    "difficulty": "Moderate",
    "language": "English",
      "instructorImg" : DocImg,
    "subtitles": ["English", "Spanish"],
    "duration": "9 hours 35 minutes",
    "certificate": true,
    "reviews": 690,
    "instructor": "Dr. Alice Brown",
    "price": "$140",
    "image": course4Img,
     "img" : watch4Img,
    "rating": 4.6,
    "description":  [
    `Qorem ipsum dolor sit amet, consectetur adipiscing elit.
     Etiam eu turpis molestie, dictum est a, mattis tellus.
      Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. 
      Maecenas eget condimentum velit, sit amet feugiat lectus.
       Class aptent taciti sociosqu ad litora torquent per conubia nostra,
       per inceptos himenaeos. Praesent auctor purus luctus enim egestas,
       ac scelerisque ante pulvinar. Donec ut rhoncus ex. 
       Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem.
        Morbi convallis convallis diam sit amet lacinia.
     Aliquam in elementum tellus.`,

    `Curabitur tempor quis eros tempus lacinia. 
     Nam bibendum pellentesque quam a convallis.
     Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis.
      Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum.
      Morbi a eleifend magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh.
      Mauris sit amet magna non ligula vestibulum eleifend.
       Nulla varius volutpat turpis sed lacinia. Nam eget mi in purus lobortis eleifend.
        Sed nec ante dictum sem condimentum ullamcorper quis venenatis nisi. 
        Proin vitae facilisis nisi, ac posuere leo.`
  ]
  },
  {
    "id": 10,
    "category": "Physiotherapy",
    "title": "Clinical Orthopedic Assessment",
    "modules": 8,
    "difficulty": "Advanced",
    "language": "English",
      "instructorImg" : DocImg,
    "subtitles": ["English"],
    "duration": "6 hours 45 minutes",
    "certificate": false,
    "reviews": 540,
    "instructor": "Dr. Alice Brown",
    "price": "$140",
    "image": course3Img,
     "img" : watch3Img,
    "rating": 4.2,
    "description":  [
    `Qorem ipsum dolor sit amet, consectetur adipiscing elit.
     Etiam eu turpis molestie, dictum est a, mattis tellus.
      Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. 
      Maecenas eget condimentum velit, sit amet feugiat lectus.
       Class aptent taciti sociosqu ad litora torquent per conubia nostra,
       per inceptos himenaeos. Praesent auctor purus luctus enim egestas,
       ac scelerisque ante pulvinar. Donec ut rhoncus ex. 
       Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem.
        Morbi convallis convallis diam sit amet lacinia.
     Aliquam in elementum tellus.`,

    `Curabitur tempor quis eros tempus lacinia. 
     Nam bibendum pellentesque quam a convallis.
     Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis.
      Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum.
      Morbi a eleifend magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh.
      Mauris sit amet magna non ligula vestibulum eleifend.
       Nulla varius volutpat turpis sed lacinia. Nam eget mi in purus lobortis eleifend.
        Sed nec ante dictum sem condimentum ullamcorper quis venenatis nisi. 
        Proin vitae facilisis nisi, ac posuere leo.`
  ]
  },
  {
    "id": 11,
    "category": "Physiotherapy",
    "title": "Women’s Health Physiotherapy",
    "modules": 10,
    "difficulty": "Moderate",
    "language": "English",
      "instructorImg" : DocImg,
    "subtitles": ["English", "French"],
    "duration": "7 hours 55 minutes",
    "certificate": true,
    "reviews": 610,
    "instructor": "Dr. Alice Brown",
    "price": "$140",
    "image": course2Img,
     "img" : watch2Img,
    "rating": 4.4,
    "description": [
    `Qorem ipsum dolor sit amet, consectetur adipiscing elit.
     Etiam eu turpis molestie, dictum est a, mattis tellus.
      Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. 
      Maecenas eget condimentum velit, sit amet feugiat lectus.
       Class aptent taciti sociosqu ad litora torquent per conubia nostra,
       per inceptos himenaeos. Praesent auctor purus luctus enim egestas,
       ac scelerisque ante pulvinar. Donec ut rhoncus ex. 
       Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem.
        Morbi convallis convallis diam sit amet lacinia.
     Aliquam in elementum tellus.`,

    `Curabitur tempor quis eros tempus lacinia. 
     Nam bibendum pellentesque quam a convallis.
     Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis.
      Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum.
      Morbi a eleifend magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh.
      Mauris sit amet magna non ligula vestibulum eleifend.
       Nulla varius volutpat turpis sed lacinia. Nam eget mi in purus lobortis eleifend.
        Sed nec ante dictum sem condimentum ullamcorper quis venenatis nisi. 
        Proin vitae facilisis nisi, ac posuere leo.`
  ]
  },
  {
    "id": 12,
    "category": "Physiotherapy",
    "title": "Physiotherapy Case Studies",
    "modules": 15,
    "difficulty": "Advanced",
    "language": "English",
    "subtitles": ["English"],
    "duration": "13 hours 10 minutes",
    "certificate": true,
      "instructorImg" : DocImg,
    "reviews": 770,
    "instructor": "Dr. Alice Brown",
    "price": "$140",
    "image": course1Img,
     "img" : watch1Img,
    "rating": 4.8,
    "description": [
    `Qorem ipsum dolor sit amet, consectetur adipiscing elit.
     Etiam eu turpis molestie, dictum est a, mattis tellus.
      Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. 
      Maecenas eget condimentum velit, sit amet feugiat lectus.
       Class aptent taciti sociosqu ad litora torquent per conubia nostra,
       per inceptos himenaeos. Praesent auctor purus luctus enim egestas,
       ac scelerisque ante pulvinar. Donec ut rhoncus ex. 
       Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem.
        Morbi convallis convallis diam sit amet lacinia.
     Aliquam in elementum tellus.`,

    `Curabitur tempor quis eros tempus lacinia. 
     Nam bibendum pellentesque quam a convallis.
     Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis.
      Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum.
      Morbi a eleifend magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh.
      Mauris sit amet magna non ligula vestibulum eleifend.
       Nulla varius volutpat turpis sed lacinia. Nam eget mi in purus lobortis eleifend.
        Sed nec ante dictum sem condimentum ullamcorper quis venenatis nisi. 
        Proin vitae facilisis nisi, ac posuere leo.`
  ]
  },
  {
    "id": 13,
    "category": "Medical",
    "title": "Human Anatomy & Physiology",
    "modules": 12,
    "difficulty": "Beginner",
    "language": "English",
    "subtitles": ["English", "French"],
    "duration": "9 hours 10 minutes",
    "certificate": true,
      "instructorImg" : DocImg,
    "reviews": 1400,
    "instructor": "Dr. Alice Brown",
    "price": "$140",
    "image": course2Img,
     "img" : watch2Img,
    "rating": 4.5,
    "description": [
    `Qorem ipsum dolor sit amet, consectetur adipiscing elit.
     Etiam eu turpis molestie, dictum est a, mattis tellus.
      Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. 
      Maecenas eget condimentum velit, sit amet feugiat lectus.
       Class aptent taciti sociosqu ad litora torquent per conubia nostra,
       per inceptos himenaeos. Praesent auctor purus luctus enim egestas,
       ac scelerisque ante pulvinar. Donec ut rhoncus ex. 
       Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem.
        Morbi convallis convallis diam sit amet lacinia.
     Aliquam in elementum tellus.`,

    `Curabitur tempor quis eros tempus lacinia. 
     Nam bibendum pellentesque quam a convallis.
     Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis.
      Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum.
      Morbi a eleifend magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh.
      Mauris sit amet magna non ligula vestibulum eleifend.
       Nulla varius volutpat turpis sed lacinia. Nam eget mi in purus lobortis eleifend.
        Sed nec ante dictum sem condimentum ullamcorper quis venenatis nisi. 
        Proin vitae facilisis nisi, ac posuere leo.`
  ]
  },
  {
    "id": 14,
    "category": "Medical",
    "title": "Pharmacology Basics",
    "modules": 11,
    "difficulty": "Moderate",
    "language": "English",
      "instructorImg" : DocImg,
    "subtitles": ["English", "Hindi"],
    "duration": "8 hours 40 minutes",
    "certificate": true,
    "reviews": 1100,
    "instructor": "Dr. Alice Brown",
    "price": "$140",
    "image": course1Img,
     "img" : watch1Img,
    "rating": 4.4,
    "description":  [
    `Qorem ipsum dolor sit amet, consectetur adipiscing elit.
     Etiam eu turpis molestie, dictum est a, mattis tellus.
      Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. 
      Maecenas eget condimentum velit, sit amet feugiat lectus.
       Class aptent taciti sociosqu ad litora torquent per conubia nostra,
       per inceptos himenaeos. Praesent auctor purus luctus enim egestas,
       ac scelerisque ante pulvinar. Donec ut rhoncus ex. 
       Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem.
        Morbi convallis convallis diam sit amet lacinia.
     Aliquam in elementum tellus.`,

    `Curabitur tempor quis eros tempus lacinia. 
     Nam bibendum pellentesque quam a convallis.
     Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis.
      Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum.
      Morbi a eleifend magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh.
      Mauris sit amet magna non ligula vestibulum eleifend.
       Nulla varius volutpat turpis sed lacinia. Nam eget mi in purus lobortis eleifend.
        Sed nec ante dictum sem condimentum ullamcorper quis venenatis nisi. 
        Proin vitae facilisis nisi, ac posuere leo.`
  ]
  },
  {
    "id": 15,
    "category": "Medical",
    "title": "Microbiology for Medicine",
    "modules": 10,
    "difficulty": "Moderate",
    "language": "English",
      "instructorImg" : DocImg,
    "subtitles": ["English"],
    "duration": "7 hours 30 minutes",
    "certificate": true,
    "reviews": 870,
    "instructor": "Dr. Alice Brown",
    "price": "$140",
    "image": course3Img,
     "img" : watch3Img,
    "rating": 4.3,
    "description":  [
    `Qorem ipsum dolor sit amet, consectetur adipiscing elit.
     Etiam eu turpis molestie, dictum est a, mattis tellus.
      Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. 
      Maecenas eget condimentum velit, sit amet feugiat lectus.
       Class aptent taciti sociosqu ad litora torquent per conubia nostra,
       per inceptos himenaeos. Praesent auctor purus luctus enim egestas,
       ac scelerisque ante pulvinar. Donec ut rhoncus ex. 
       Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem.
        Morbi convallis convallis diam sit amet lacinia.
     Aliquam in elementum tellus.`,

    `Curabitur tempor quis eros tempus lacinia. 
     Nam bibendum pellentesque quam a convallis.
     Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis.
      Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum.
      Morbi a eleifend magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh.
      Mauris sit amet magna non ligula vestibulum eleifend.
       Nulla varius volutpat turpis sed lacinia. Nam eget mi in purus lobortis eleifend.
        Sed nec ante dictum sem condimentum ullamcorper quis venenatis nisi. 
        Proin vitae facilisis nisi, ac posuere leo.`
  ]
  },
  {
    "id": 16,
    "category": "Medical",
    "title": "Pathology Essentials",
    "modules": 12,
      "instructorImg" : DocImg,
    "difficulty": "Advanced",
    "language": "English",
    "subtitles": ["English", "Spanish"],
    "duration": "10 hours 25 minutes",
    "certificate": true,
    "reviews": 950,
    "instructor": "Dr. Alice Brown",
    "price": "$140",
    "image": course4Img,
     "img" : watch4Img,
    "rating": 4.6,
    "description":  [
    `Qorem ipsum dolor sit amet, consectetur adipiscing elit.
     Etiam eu turpis molestie, dictum est a, mattis tellus.
      Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. 
      Maecenas eget condimentum velit, sit amet feugiat lectus.
       Class aptent taciti sociosqu ad litora torquent per conubia nostra,
       per inceptos himenaeos. Praesent auctor purus luctus enim egestas,
       ac scelerisque ante pulvinar. Donec ut rhoncus ex. 
       Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem.
        Morbi convallis convallis diam sit amet lacinia.
     Aliquam in elementum tellus.`,

    `Curabitur tempor quis eros tempus lacinia. 
     Nam bibendum pellentesque quam a convallis.
     Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis.
      Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum.
      Morbi a eleifend magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh.
      Mauris sit amet magna non ligula vestibulum eleifend.
       Nulla varius volutpat turpis sed lacinia. Nam eget mi in purus lobortis eleifend.
        Sed nec ante dictum sem condimentum ullamcorper quis venenatis nisi. 
        Proin vitae facilisis nisi, ac posuere leo.`
  ]
  },
  {
    "id": 17,
    "category": "Medical",
    "title": "Clinical Biochemistry",
    "modules": 9,
      "instructorImg" : DocImg,
    "difficulty": "Moderate",
    "language": "English",
    "subtitles": ["English"],
    "duration": "8 hours 15 minutes",
    "certificate": false,
    "reviews": 650,
    "rating": 4.2,
    "instructor": "Dr. Alice Brown",
    "price": "$140",
    "image": course2Img,
     "img" : watch2Img,
    "description":  [
    `Qorem ipsum dolor sit amet, consectetur adipiscing elit.
     Etiam eu turpis molestie, dictum est a, mattis tellus.
      Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. 
      Maecenas eget condimentum velit, sit amet feugiat lectus.
       Class aptent taciti sociosqu ad litora torquent per conubia nostra,
       per inceptos himenaeos. Praesent auctor purus luctus enim egestas,
       ac scelerisque ante pulvinar. Donec ut rhoncus ex. 
       Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem.
        Morbi convallis convallis diam sit amet lacinia.
     Aliquam in elementum tellus.`,

    `Curabitur tempor quis eros tempus lacinia. 
     Nam bibendum pellentesque quam a convallis.
     Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis.
      Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum.
      Morbi a eleifend magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh.
      Mauris sit amet magna non ligula vestibulum eleifend.
       Nulla varius volutpat turpis sed lacinia. Nam eget mi in purus lobortis eleifend.
        Sed nec ante dictum sem condimentum ullamcorper quis venenatis nisi. 
        Proin vitae facilisis nisi, ac posuere leo.`
  ]
},
  {
    "id": 18,
    "category": "Medical",
    "title": "Medical Genetics",
    "modules": 11,
    "difficulty": "Advanced",
      "instructorImg" : DocImg,
    "language": "English",
    "subtitles": ["English", "French"],
    "duration": "9 hours 50 minutes",
    "certificate": true,
    "reviews": 720,
    "instructor": "Dr. Alice Brown",
    "price": "$140",
    "image": course4Img,
     "img" : watch4Img,
    "rating": 4.5,
    "description":  [
    `Qorem ipsum dolor sit amet, consectetur adipiscing elit.
     Etiam eu turpis molestie, dictum est a, mattis tellus.
      Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. 
      Maecenas eget condimentum velit, sit amet feugiat lectus.
       Class aptent taciti sociosqu ad litora torquent per conubia nostra,
       per inceptos himenaeos. Praesent auctor purus luctus enim egestas,
       ac scelerisque ante pulvinar. Donec ut rhoncus ex. 
       Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem.
        Morbi convallis convallis diam sit amet lacinia.
     Aliquam in elementum tellus.`,

    `Curabitur tempor quis eros tempus lacinia. 
     Nam bibendum pellentesque quam a convallis.
     Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis.
      Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum.
      Morbi a eleifend magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh.
      Mauris sit amet magna non ligula vestibulum eleifend.
       Nulla varius volutpat turpis sed lacinia. Nam eget mi in purus lobortis eleifend.
        Sed nec ante dictum sem condimentum ullamcorper quis venenatis nisi. 
        Proin vitae facilisis nisi, ac posuere leo.`
  ]
  },
  {
    "id": 19,
    "category": "Medical",
    "title": "Immunology & Disease",
    "modules": 10,
    "difficulty": "Moderate",
      "instructorImg" : DocImg,
    "language": "English",
    "subtitles": ["English"],
    "duration": "7 hours 55 minutes",
    "certificate": true,
    "reviews": 860,
    "instructor": "Dr. Alice Brown",
    "price": "$140",
    "image": course3Img,
     "img" : watch3Img,
    "rating": 4.4,
    "description": [
    `Qorem ipsum dolor sit amet, consectetur adipiscing elit.
     Etiam eu turpis molestie, dictum est a, mattis tellus.
      Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. 
      Maecenas eget condimentum velit, sit amet feugiat lectus.
       Class aptent taciti sociosqu ad litora torquent per conubia nostra,
       per inceptos himenaeos. Praesent auctor purus luctus enim egestas,
       ac scelerisque ante pulvinar. Donec ut rhoncus ex. 
       Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem.
        Morbi convallis convallis diam sit amet lacinia.
     Aliquam in elementum tellus.`,

    `Curabitur tempor quis eros tempus lacinia. 
     Nam bibendum pellentesque quam a convallis.
     Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis.
      Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum.
      Morbi a eleifend magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh.
      Mauris sit amet magna non ligula vestibulum eleifend.
       Nulla varius volutpat turpis sed lacinia. Nam eget mi in purus lobortis eleifend.
        Sed nec ante dictum sem condimentum ullamcorper quis venenatis nisi. 
        Proin vitae facilisis nisi, ac posuere leo.`
  ]
  },
  {
    "id": 20,
    "category": "Medical",
    "title": "Forensic Medicine",
    "modules": 8,
    "difficulty": "Advanced",
      "instructorImg" : DocImg,
    "language": "English",
    "subtitles": ["English"],
    "duration": "6 hours 45 minutes",
    "certificate": false,
    "reviews": 580,
    "instructor": "Dr. Alice Brown",
    "price": "$140",
    "image": course3Img,
     "img" : watch3Img,
    "rating": 4.1,
    "description":  [
    `Qorem ipsum dolor sit amet, consectetur adipiscing elit.
     Etiam eu turpis molestie, dictum est a, mattis tellus.
      Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. 
      Maecenas eget condimentum velit, sit amet feugiat lectus.
       Class aptent taciti sociosqu ad litora torquent per conubia nostra,
       per inceptos himenaeos. Praesent auctor purus luctus enim egestas,
       ac scelerisque ante pulvinar. Donec ut rhoncus ex. 
       Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem.
        Morbi convallis convallis diam sit amet lacinia.
     Aliquam in elementum tellus.`,

    `Curabitur tempor quis eros tempus lacinia. 
     Nam bibendum pellentesque quam a convallis.
     Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis.
      Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum.
      Morbi a eleifend magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh.
      Mauris sit amet magna non ligula vestibulum eleifend.
       Nulla varius volutpat turpis sed lacinia. Nam eget mi in purus lobortis eleifend.
        Sed nec ante dictum sem condimentum ullamcorper quis venenatis nisi. 
        Proin vitae facilisis nisi, ac posuere leo.`
  ]
},
{
    "id": 21,
    "category": "Medical",
    "title": "Clinical Nutrition",
    "modules": 12,
    "difficulty": "Moderate",
      "instructorImg" : DocImg,
    "language": "English",
    "subtitles": ["English", "Hindi"],
    "duration": "8 hours 20 minutes",
    "certificate": true,
    "reviews": 940,
    "instructor": "Dr. Alice Brown",
    "price": "$140",
    "image": course4Img,
     "img" : watch4Img,
    "rating": 4.5,
    "description":  [
    `Qorem ipsum dolor sit amet, consectetur adipiscing elit.
     Etiam eu turpis molestie, dictum est a, mattis tellus.
      Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. 
      Maecenas eget condimentum velit, sit amet feugiat lectus.
       Class aptent taciti sociosqu ad litora torquent per conubia nostra,
       per inceptos himenaeos. Praesent auctor purus luctus enim egestas,
       ac scelerisque ante pulvinar. Donec ut rhoncus ex. 
       Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem.
        Morbi convallis convallis diam sit amet lacinia.
     Aliquam in elementum tellus.`,

    `Curabitur tempor quis eros tempus lacinia. 
     Nam bibendum pellentesque quam a convallis.
     Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis.
      Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum.
      Morbi a eleifend magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh.
      Mauris sit amet magna non ligula vestibulum eleifend.
       Nulla varius volutpat turpis sed lacinia. Nam eget mi in purus lobortis eleifend.
        Sed nec ante dictum sem condimentum ullamcorper quis venenatis nisi. 
        Proin vitae facilisis nisi, ac posuere leo.`
  ]
  },
  {
    "id": 22,
    "category": "Medical",
    "title": "Epidemiology & Public Health",
    "modules": 13,
    "difficulty": "Advanced",
      "instructorImg" : DocImg,
    "language": "English",
    "subtitles": ["English", "Spanish"],
    "duration": "10 hours 35 minutes",
    "certificate": true,
    "reviews": 770,
    "instructor": "Dr. Alice Brown",
    "price": "$140",
    "image": course1Img,
     "img" : watch1Img,
    "rating": 4.6,
    "description":  [
    `Qorem ipsum dolor sit amet, consectetur adipiscing elit.
     Etiam eu turpis molestie, dictum est a, mattis tellus.
      Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. 
      Maecenas eget condimentum velit, sit amet feugiat lectus.
       Class aptent taciti sociosqu ad litora torquent per conubia nostra,
       per inceptos himenaeos. Praesent auctor purus luctus enim egestas,
       ac scelerisque ante pulvinar. Donec ut rhoncus ex. 
       Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem.
        Morbi convallis convallis diam sit amet lacinia.
     Aliquam in elementum tellus.`,

    `Curabitur tempor quis eros tempus lacinia. 
     Nam bibendum pellentesque quam a convallis.
     Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis.
      Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum.
      Morbi a eleifend magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh.
      Mauris sit amet magna non ligula vestibulum eleifend.
       Nulla varius volutpat turpis sed lacinia. Nam eget mi in purus lobortis eleifend.
        Sed nec ante dictum sem condimentum ullamcorper quis venenatis nisi. 
        Proin vitae facilisis nisi, ac posuere leo.`
  ]
  },
  {
    "id": 23,
    "category": "Medical",
    "title": "Surgical Techniques Basics",
    "modules": 9,
    "difficulty": "Advanced",
      "instructorImg" : DocImg,
    "language": "English",
    "subtitles": ["English"],
    "duration": "7 hours 40 minutes",
    "certificate": false,
    "reviews": 690,
    "instructor": "Dr. Alice Brown",
    "price": "$140",
    "image": course4Img,
     "img" : watch4Img,
    "rating": 4.3,
        "description":  [
    `Qorem ipsum dolor sit amet, consectetur adipiscing elit.
     Etiam eu turpis molestie, dictum est a, mattis tellus.
      Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. 
      Maecenas eget condimentum velit, sit amet feugiat lectus.
       Class aptent taciti sociosqu ad litora torquent per conubia nostra,
       per inceptos himenaeos. Praesent auctor purus luctus enim egestas,
       ac scelerisque ante pulvinar. Donec ut rhoncus ex. 
       Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem.
        Morbi convallis convallis diam sit amet lacinia.
     Aliquam in elementum tellus.`,

    `Curabitur tempor quis eros tempus lacinia. 
     Nam bibendum pellentesque quam a convallis.
     Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis.
      Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum.
      Morbi a eleifend magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh.
      Mauris sit amet magna non ligula vestibulum eleifend.
       Nulla varius volutpat turpis sed lacinia. Nam eget mi in purus lobortis eleifend.
        Sed nec ante dictum sem condimentum ullamcorper quis venenatis nisi. 
        Proin vitae facilisis nisi, ac posuere leo.`
  ]
  },
  {
    "id": 24,
    "category": "Medical",
    "title": "Medical Ethics & Law",
    "modules": 8,
    "difficulty": "Beginner",
      "instructorImg" : DocImg,
    "language": "English",
    "subtitles": ["English"],
    "duration": "6 hours 20 minutes",
    "certificate": true,
    "reviews": 510,
    "instructor": "Dr. Alice Brown",
    "price": "$140",
    "image": course3Img,
     "img" : watch3Img,
    "rating": 4.2,
        "description":  [
    `Qorem ipsum dolor sit amet, consectetur adipiscing elit.
     Etiam eu turpis molestie, dictum est a, mattis tellus.
      Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. 
      Maecenas eget condimentum velit, sit amet feugiat lectus.
       Class aptent taciti sociosqu ad litora torquent per conubia nostra,
       per inceptos himenaeos. Praesent auctor purus luctus enim egestas,
       ac scelerisque ante pulvinar. Donec ut rhoncus ex. 
       Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem.
        Morbi convallis convallis diam sit amet lacinia.
     Aliquam in elementum tellus.`,

    `Curabitur tempor quis eros tempus lacinia. 
     Nam bibendum pellentesque quam a convallis.
     Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis.
      Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum.
      Morbi a eleifend magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh.
      Mauris sit amet magna non ligula vestibulum eleifend.
       Nulla varius volutpat turpis sed lacinia. Nam eget mi in purus lobortis eleifend.
        Sed nec ante dictum sem condimentum ullamcorper quis venenatis nisi. 
        Proin vitae facilisis nisi, ac posuere leo.`
  ]
  },
  {
    "id": 25,
    "category": "Specialized",
    "title": "Sports Physiotherapy",
    "modules": 14,
      "instructorImg" : DocImg,
    "difficulty": "Advanced",
    "language": "English",
    "subtitles": ["English", "Spanish"],
    "duration": "12 hours 30 minutes",
    "certificate": true,
    "reviews": 1650,
    "instructor": "Dr. Alice Brown",
    "price": "$140",
    "image": course2Img,
     "img" : watch2Img,
    "rating": 4.8,
        "description":  [
    `Qorem ipsum dolor sit amet, consectetur adipiscing elit.
     Etiam eu turpis molestie, dictum est a, mattis tellus.
      Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. 
      Maecenas eget condimentum velit, sit amet feugiat lectus.
       Class aptent taciti sociosqu ad litora torquent per conubia nostra,
       per inceptos himenaeos. Praesent auctor purus luctus enim egestas,
       ac scelerisque ante pulvinar. Donec ut rhoncus ex. 
       Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem.
        Morbi convallis convallis diam sit amet lacinia.
     Aliquam in elementum tellus.`,

    `Curabitur tempor quis eros tempus lacinia. 
     Nam bibendum pellentesque quam a convallis.
     Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis.
      Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum.
      Morbi a eleifend magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh.
      Mauris sit amet magna non ligula vestibulum eleifend.
       Nulla varius volutpat turpis sed lacinia. Nam eget mi in purus lobortis eleifend.
        Sed nec ante dictum sem condimentum ullamcorper quis venenatis nisi. 
        Proin vitae facilisis nisi, ac posuere leo.`
  ]
  },
  {
    "id": 26,
    "category": "Specialized",
    "title": "Pediatric Physiotherapy",
    "modules": 10,
    "difficulty": "Moderate",
    "language": "English",
      "instructorImg" : DocImg,
    "subtitles": ["English", "Hindi"],
    "duration": "8 hours 45 minutes",
    "certificate": true,
    "reviews": 980,
    "instructor": "Dr. Alice Brown",
    "price": "$140",
    "image": course2Img,
     "img" : watch2Img,
    "rating": 4.6,
       "description":  [
    `Qorem ipsum dolor sit amet, consectetur adipiscing elit.
     Etiam eu turpis molestie, dictum est a, mattis tellus.
      Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. 
      Maecenas eget condimentum velit, sit amet feugiat lectus.
       Class aptent taciti sociosqu ad litora torquent per conubia nostra,
       per inceptos himenaeos. Praesent auctor purus luctus enim egestas,
       ac scelerisque ante pulvinar. Donec ut rhoncus ex. 
       Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem.
        Morbi convallis convallis diam sit amet lacinia.
     Aliquam in elementum tellus.`,

    `Curabitur tempor quis eros tempus lacinia. 
     Nam bibendum pellentesque quam a convallis.
     Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis.
      Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum.
      Morbi a eleifend magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh.
      Mauris sit amet magna non ligula vestibulum eleifend.
       Nulla varius volutpat turpis sed lacinia. Nam eget mi in purus lobortis eleifend.
        Sed nec ante dictum sem condimentum ullamcorper quis venenatis nisi. 
        Proin vitae facilisis nisi, ac posuere leo.`
  ]
  },
  {
    "id": 27,
    "category": "Specialized",
    "title": "Neurorehabilitation",
    "modules": 13,
    "difficulty": "Advanced",
    "language": "English",
      "instructorImg" : DocImg,
    "subtitles": ["English", "French"],
    "duration": "11 hours 10 minutes",
    "certificate": true,
    "reviews": 1150,
    "instructor": "Dr. Alice Brown",
    "price": "$140",
    "image": course1Img,
     "img" : watch1Img,
    "rating": 4.7,
       "description":  [
    `Qorem ipsum dolor sit amet, consectetur adipiscing elit.
     Etiam eu turpis molestie, dictum est a, mattis tellus.
      Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. 
      Maecenas eget condimentum velit, sit amet feugiat lectus.
       Class aptent taciti sociosqu ad litora torquent per conubia nostra,
       per inceptos himenaeos. Praesent auctor purus luctus enim egestas,
       ac scelerisque ante pulvinar. Donec ut rhoncus ex. 
       Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem.
        Morbi convallis convallis diam sit amet lacinia.
     Aliquam in elementum tellus.`,

    `Curabitur tempor quis eros tempus lacinia. 
     Nam bibendum pellentesque quam a convallis.
     Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis.
      Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum.
      Morbi a eleifend magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh.
      Mauris sit amet magna non ligula vestibulum eleifend.
       Nulla varius volutpat turpis sed lacinia. Nam eget mi in purus lobortis eleifend.
        Sed nec ante dictum sem condimentum ullamcorper quis venenatis nisi. 
        Proin vitae facilisis nisi, ac posuere leo.`
  ]
  },
  {
    "id": 28,
    "category": "Specialized",
    "title": "Oncology Rehabilitation",
    "modules": 9,
    "difficulty": "Moderate",
    "language": "English",
      "instructorImg" : DocImg,
    "subtitles": ["English"],
    "duration": "7 hours 55 minutes",
    "certificate": true,
    "instructor": "Dr. Alice Brown",
    "price": "$140",
    "image": course4Img,
     "img" : watch4Img,
    "reviews": 740,
    "rating": 4.4,
        "description":  [
    `Qorem ipsum dolor sit amet, consectetur adipiscing elit.
     Etiam eu turpis molestie, dictum est a, mattis tellus.
      Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. 
      Maecenas eget condimentum velit, sit amet feugiat lectus.
       Class aptent taciti sociosqu ad litora torquent per conubia nostra,
       per inceptos himenaeos. Praesent auctor purus luctus enim egestas,
       ac scelerisque ante pulvinar. Donec ut rhoncus ex. 
       Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem.
        Morbi convallis convallis diam sit amet lacinia.
     Aliquam in elementum tellus.`,

    `Curabitur tempor quis eros tempus lacinia. 
     Nam bibendum pellentesque quam a convallis.
     Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis.
      Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum.
      Morbi a eleifend magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh.
      Mauris sit amet magna non ligula vestibulum eleifend.
       Nulla varius volutpat turpis sed lacinia. Nam eget mi in purus lobortis eleifend.
        Sed nec ante dictum sem condimentum ullamcorper quis venenatis nisi. 
        Proin vitae facilisis nisi, ac posuere leo.`
  ]
  },
  {
    "id": 29,
    "category": "Specialized",
    "title": "Occupational Therapy Integration",
    "modules": 11,
    "difficulty": "Moderate",
    "language": "English",
      "instructorImg" : DocImg,
    "subtitles": ["English", "Spanish"],
    "duration": "9 hours 15 minutes",
    "certificate": true,
    "instructor": "Dr. Alice Brown",
    "price": "$140",
    "image": course3Img,
     "img" : watch3Img,
    "reviews": 870,
    "rating": 4.5,
        "description":  [
    `Qorem ipsum dolor sit amet, consectetur adipiscing elit.
     Etiam eu turpis molestie, dictum est a, mattis tellus.
      Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. 
      Maecenas eget condimentum velit, sit amet feugiat lectus.
       Class aptent taciti sociosqu ad litora torquent per conubia nostra,
       per inceptos himenaeos. Praesent auctor purus luctus enim egestas,
       ac scelerisque ante pulvinar. Donec ut rhoncus ex. 
       Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem.
        Morbi convallis convallis diam sit amet lacinia.
     Aliquam in elementum tellus.`,

    `Curabitur tempor quis eros tempus lacinia. 
     Nam bibendum pellentesque quam a convallis.
     Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis.
      Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum.
      Morbi a eleifend magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh.
      Mauris sit amet magna non ligula vestibulum eleifend.
       Nulla varius volutpat turpis sed lacinia. Nam eget mi in purus lobortis eleifend.
        Sed nec ante dictum sem condimentum ullamcorper quis venenatis nisi. 
        Proin vitae facilisis nisi, ac posuere leo.`
  ]
  },
  {
    "id": 30,
    "category": "Specialized",
    "title": "Hand Therapy",
    "modules": 8,
      "instructorImg" : DocImg,
    "difficulty": "Advanced",
    "language": "English",
    "subtitles": ["English"],
    "duration": "6 hours 40 minutes",
    "certificate": false,
    "instructor": "Dr. Alice Brown",
    "price": "$140",
    "image": course2Img,
     "img" : watch2Img,
    "reviews": 620,
    "rating": 4.3,
        "description":  [
    `Qorem ipsum dolor sit amet, consectetur adipiscing elit.
     Etiam eu turpis molestie, dictum est a, mattis tellus.
      Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. 
      Maecenas eget condimentum velit, sit amet feugiat lectus.
       Class aptent taciti sociosqu ad litora torquent per conubia nostra,
       per inceptos himenaeos. Praesent auctor purus luctus enim egestas,
       ac scelerisque ante pulvinar. Donec ut rhoncus ex. 
       Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem.
        Morbi convallis convallis diam sit amet lacinia.
     Aliquam in elementum tellus.`,

    `Curabitur tempor quis eros tempus lacinia. 
     Nam bibendum pellentesque quam a convallis.
     Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis.
      Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum.
      Morbi a eleifend magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh.
      Mauris sit amet magna non ligula vestibulum eleifend.
       Nulla varius volutpat turpis sed lacinia. Nam eget mi in purus lobortis eleifend.
        Sed nec ante dictum sem condimentum ullamcorper quis venenatis nisi. 
        Proin vitae facilisis nisi, ac posuere leo.`
  ]
  },
  {
    "id": 31,
    "category": "Specialized",
    "title": "Vestibular Rehabilitation",
    "modules": 10,
      "instructorImg" : DocImg,
    "difficulty": "Advanced",
    "language": "English",
    "subtitles": ["English"],
    "duration": "8 hours 20 minutes",
    "certificate": true,
    "instructor": "Dr. Alice Brown",
    "price": "$140",
    "image": course1Img,
     "img" : watch1Img,
    "reviews": 690,
    "rating": 4.4,
       "description":  [
    `Qorem ipsum dolor sit amet, consectetur adipiscing elit.
     Etiam eu turpis molestie, dictum est a, mattis tellus.
      Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. 
      Maecenas eget condimentum velit, sit amet feugiat lectus.
       Class aptent taciti sociosqu ad litora torquent per conubia nostra,
       per inceptos himenaeos. Praesent auctor purus luctus enim egestas,
       ac scelerisque ante pulvinar. Donec ut rhoncus ex. 
       Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem.
        Morbi convallis convallis diam sit amet lacinia.
     Aliquam in elementum tellus.`,

    `Curabitur tempor quis eros tempus lacinia. 
     Nam bibendum pellentesque quam a convallis.
     Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis.
      Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum.
      Morbi a eleifend magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh.
      Mauris sit amet magna non ligula vestibulum eleifend.
       Nulla varius volutpat turpis sed lacinia. Nam eget mi in purus lobortis eleifend.
        Sed nec ante dictum sem condimentum ullamcorper quis venenatis nisi. 
        Proin vitae facilisis nisi, ac posuere leo.`
  ]
  },
  {
    "id": 32,
    "category": "Specialized",
    "title": "Chronic Pain Management",
    "modules": 12,
      "instructorImg" : DocImg,
    "difficulty": "Advanced",
    "language": "English",
    "subtitles": ["English", "French"],
    "duration": "10 hours 50 minutes",
    "certificate": true,
    "reviews": 920,
    "instructor": "Dr. Alice Brown",
    "price": "$140",
    "image": course4Img,
     "img" : watch4Img,
    "rating": 4.6,
        "description":  [
    `Qorem ipsum dolor sit amet, consectetur adipiscing elit.
     Etiam eu turpis molestie, dictum est a, mattis tellus.
      Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. 
      Maecenas eget condimentum velit, sit amet feugiat lectus.
       Class aptent taciti sociosqu ad litora torquent per conubia nostra,
       per inceptos himenaeos. Praesent auctor purus luctus enim egestas,
       ac scelerisque ante pulvinar. Donec ut rhoncus ex. 
       Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem.
        Morbi convallis convallis diam sit amet lacinia.
     Aliquam in elementum tellus.`,

    `Curabitur tempor quis eros tempus lacinia. 
     Nam bibendum pellentesque quam a convallis.
     Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis.
      Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum.
      Morbi a eleifend magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh.
      Mauris sit amet magna non ligula vestibulum eleifend.
       Nulla varius volutpat turpis sed lacinia. Nam eget mi in purus lobortis eleifend.
        Sed nec ante dictum sem condimentum ullamcorper quis venenatis nisi. 
        Proin vitae facilisis nisi, ac posuere leo.`
  ]
  },
  {
    "id": 33,
    "category": "Specialized",
    "title": "Aquatic Therapy",
    "modules": 9,
      "instructorImg" : DocImg,
    "difficulty": "Beginner",
    "language": "English",
    "subtitles": ["English"],
    "duration": "7 hours 15 minutes",
    "certificate": false,
    "reviews": 580,
    "rating": 4.2,
    "instructor": "Dr. Alice Brown",
    "price": "$140",
    "image": course4Img,
     "img" : watch4Img,
        "description":  [
    `Qorem ipsum dolor sit amet, consectetur adipiscing elit.
     Etiam eu turpis molestie, dictum est a, mattis tellus.
      Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. 
      Maecenas eget condimentum velit, sit amet feugiat lectus.
       Class aptent taciti sociosqu ad litora torquent per conubia nostra,
       per inceptos himenaeos. Praesent auctor purus luctus enim egestas,
       ac scelerisque ante pulvinar. Donec ut rhoncus ex. 
       Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem.
        Morbi convallis convallis diam sit amet lacinia.
     Aliquam in elementum tellus.`,

    `Curabitur tempor quis eros tempus lacinia. 
     Nam bibendum pellentesque quam a convallis.
     Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis.
      Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum.
      Morbi a eleifend magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh.
      Mauris sit amet magna non ligula vestibulum eleifend.
       Nulla varius volutpat turpis sed lacinia. Nam eget mi in purus lobortis eleifend.
        Sed nec ante dictum sem condimentum ullamcorper quis venenatis nisi. 
        Proin vitae facilisis nisi, ac posuere leo.`
  ]
  },
  {
    "id": 34,
    "category": "Specialized",
    "title": "Workplace Ergonomics",
    "modules": 10,
      "instructorImg" : DocImg,
    "instructor": "Dr. Alice Brown",
    "price": "$140",
    "image": course2Img,
     "img" : watch2Img,
    "difficulty": "Moderate",
    "language": "English",
    "subtitles": ["English", "Hindi"],
    "duration": "8 hours 35 minutes",
    "certificate": true,
    "reviews": 860,
    "rating": 4.5,
        "description":  [
    `Qorem ipsum dolor sit amet, consectetur adipiscing elit.
     Etiam eu turpis molestie, dictum est a, mattis tellus.
      Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. 
      Maecenas eget condimentum velit, sit amet feugiat lectus.
       Class aptent taciti sociosqu ad litora torquent per conubia nostra,
       per inceptos himenaeos. Praesent auctor purus luctus enim egestas,
       ac scelerisque ante pulvinar. Donec ut rhoncus ex. 
       Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem.
        Morbi convallis convallis diam sit amet lacinia.
     Aliquam in elementum tellus.`,

    `Curabitur tempor quis eros tempus lacinia. 
     Nam bibendum pellentesque quam a convallis.
     Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis.
      Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum.
      Morbi a eleifend magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh.
      Mauris sit amet magna non ligula vestibulum eleifend.
       Nulla varius volutpat turpis sed lacinia. Nam eget mi in purus lobortis eleifend.
        Sed nec ante dictum sem condimentum ullamcorper quis venenatis nisi. 
        Proin vitae facilisis nisi, ac posuere leo.`
  ]
  },
  {
    "id": 35,
    "category": "Specialized",
    "title": "Community-Based Rehabilitation",
    "modules": 12,
      "instructorImg" : DocImg,
    "difficulty": "Moderate",
    "language": "English",
    "subtitles": ["English"],
    "duration": "9 hours 30 minutes",
    "certificate": true,
    "reviews": 780,
    "instructor": "Dr. Alice Brown",
    "price": "$140",
    "image": course2Img,
     "img" : watch2Img,
    "rating": 4.4,
        "description":  [
    `Qorem ipsum dolor sit amet, consectetur adipiscing elit.
     Etiam eu turpis molestie, dictum est a, mattis tellus.
      Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. 
      Maecenas eget condimentum velit, sit amet feugiat lectus.
       Class aptent taciti sociosqu ad litora torquent per conubia nostra,
       per inceptos himenaeos. Praesent auctor purus luctus enim egestas,
       ac scelerisque ante pulvinar. Donec ut rhoncus ex. 
       Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem.
        Morbi convallis convallis diam sit amet lacinia.
     Aliquam in elementum tellus.`,

    `Curabitur tempor quis eros tempus lacinia. 
     Nam bibendum pellentesque quam a convallis.
     Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis.
      Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum.
      Morbi a eleifend magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh.
      Mauris sit amet magna non ligula vestibulum eleifend.
       Nulla varius volutpat turpis sed lacinia. Nam eget mi in purus lobortis eleifend.
        Sed nec ante dictum sem condimentum ullamcorper quis venenatis nisi. 
        Proin vitae facilisis nisi, ac posuere leo.`
  ]
},
  {
    "id": 36,
    "category": "Specialized",
    "title": "Tele-Rehabilitation",
    "modules": 11,
      "instructorImg" : DocImg,
    "difficulty": "Advanced",
    "language": "English",
    "subtitles": ["English", "Spanish"],
    "duration": "10 hours 25 minutes",
    "certificate": true,
    "instructor": "Dr. Alice Brown",
    "price": "$140",
    "image": course3Img,
     "img" : watch3Img,
    "reviews": 960,
    "rating": 4.7,
       "description":  [
    `Qorem ipsum dolor sit amet, consectetur adipiscing elit.
     Etiam eu turpis molestie, dictum est a, mattis tellus.
      Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. 
      Maecenas eget condimentum velit, sit amet feugiat lectus.
       Class aptent taciti sociosqu ad litora torquent per conubia nostra,
       per inceptos himenaeos. Praesent auctor purus luctus enim egestas,
       ac scelerisque ante pulvinar. Donec ut rhoncus ex. 
       Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem.
        Morbi convallis convallis diam sit amet lacinia.
     Aliquam in elementum tellus.`,

    `Curabitur tempor quis eros tempus lacinia. 
     Nam bibendum pellentesque quam a convallis.
     Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis.
      Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum.
      Morbi a eleifend magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh.
      Mauris sit amet magna non ligula vestibulum eleifend.
       Nulla varius volutpat turpis sed lacinia. Nam eget mi in purus lobortis eleifend.
        Sed nec ante dictum sem condimentum ullamcorper quis venenatis nisi. 
        Proin vitae facilisis nisi, ac posuere leo.`
  ]
  }

];

export default courses;

