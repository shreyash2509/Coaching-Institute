function change(x){
  if(x!=4){
    document.getElementById("he1").style.display="block";
    document.getElementById("he1").innerHTML = str[x-1];
    document.getElementById("p1").style.display="none";
  }
  else if(x==4){
  document.getElementById("p1").style.display ="block";
  
  document.getElementById("he1").style.display="none";

  }
}


let str = ["<h2>Overview</h2><hr><h3>The mercy school</h3><p>Mercy school,  New Delhi, a non-profit making society registered under the society's Registration Act of 1860. The members of the society are renowned Educationists, Jurists, Engineers and Administrators. Mercy school, delhi has successfully replicated the excellence that the other Mercy schools in India and abroad have shown in providing holistic education to its students.</p><p>We believe in the dignity and worth of each student and recognise the importance of his/her responsibilities to the world community. We believe that all youth should have equal opportunities for education, consistent with their individual capabilities and with their personal and social needs.</p><p>Apart from academics, DPS delhi ensures that the students are provided all opportunities for honing their co-curricular inclinations through sports, performing and visual arts, oratory and other creative pursuits.</p>",
"<h2>Our Mission</h2><hr><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita cumque aut eos. Dolorum eos temporibus dignissimos, doloremque possimus eaque numquam, nisi veniam totam, culpa quis ducimus minus in? Totam omnis labore, id voluptatibus placeat impedit aut quidem necessitatibus maiores ipsum quo nulla molestiae enim veniam aspernatur hic.</p> <p>Obcaecati odio molestias doloremque maiores, iure laudantium aut suscipit eius magni ipsum sunt, pariatur voluptatem magnam nostrum quis excepturi rerum saepe animi blanditiis dolores! Repudiandae, et. Sit beatae aperiam nostrum saepe distinctio. Possimus.lestiae enim veniam aspernatur hic. Obcaecati odio molestias doloremque maiores, iure laudantium aut suscipit eius magni ipsum sunt, pariatur voluptatem magnam nostrum quis excepturi rerum saepe animi blanditiis dolores! Repudiandae, et. Sit beatae aperiam nostrum saepe distinctio. Possimus.</p>",
"<h2>Our Vision</h2><hr><h4>Delhi Public School, Gaya, was founded on the principles of unimpeachable integrity and guided by its motto Service Before Self.</h4><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita cumque aut eos. Dolorum eos temporibus dignissimos, doloremque possimus eaque numquam, nisi veniam totam, culpa quis ducimus minus in? Totam omnis labore, id voluptatibus placeat impedit aut quidem necessitatibus maiores ipsum quo nulla molestiae enim veniam aspernatur hic. Obcaecati odio molestias doloremque maiores,</p><p>iure laudantium aut suscipit eius magni ipsum sunt, anditiis dolores! Repudiandae, et. Sit beatae aperiam nostrum saepe distinctio. Possimus.Obcaecati odio molestias doloremque maiores, iure laudantium aut suscipit eius magni ipsum sunt, anditiis dolores! Repudiandae, et. Sit beatae aperiam nostrum saepe distinctio. Possimus.</p>"];