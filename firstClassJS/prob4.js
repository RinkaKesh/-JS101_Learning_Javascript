let name="RINKA KESH";
school="SARADA VIDYAPITHA SENIOR SEC. SCHOOL";

grade="A"
section="B"
rollno='02'
console.log('____________________________________')
console.log(school)
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
console.log()
console.log()
console.log("....................")
console.log("STUDENT'S GRADE CARD")
console.log("''''''''''''''''''''")
console.log()
console.log('_______________________________')
console.log("|  Student Name :", name," |")
console.log("|  Section:", section,",","Roll No.:",rollno," |")
total_marks=300
marks_scored=["ENGLISH" ,78, "MATHEMATICS" ,97, "GEOGRAPHY ",86]
total_obtained=marks_scored[1]+marks_scored[3]+marks_scored[5]
console.log("|-----------------------------|")
console.log("|  Subject     : Score        |")
console.log("|-----------------------------|")
console.log("|  "+marks_scored[0],"    :",marks_scored[1],"          |")
console.log("|  "+marks_scored[2],":",marks_scored[3],"          |")
console.log("|  "+marks_scored[4]," :",marks_scored[5],"          |")
console.log("|-----------------------------|")
console.log("|  "+"Total obtained marks :",total_obtained,"|")
console.log("|  "+"Total Marks :", total_marks,"         |")
console.log("|  "+"Marks Percentage :",(total_obtained*100/total_marks)+'%',"    |")
console.log("|  "+"Grade secured :", grade,"         |")
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
console.log()
console.log(' Grade A+--> 90% and above')
console.log(' Grade A --> 80% and above')
console.log(' Grade B+--> 60% and above')
console.log(' Grade B --> 50% and above')
console.log(' Grade C --> 30% and above')
console.log('*Grade F --> below 30%')
console.log()
console.log('*Grade F means Failed.')
