import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  host: {
    'class': 'content'
  }
})
export class ContentComponent implements OnInit {
  public firstText: string = `<h1>Big Heading</h1>
  <p>Her extensive perceived may any sincerity extremity.
  Indeed add rather may pretty see. Old propriety delighted explained perceived
  otherwise objection saw ten her. Doubt merit sir the right these alone
  keeps. By sometimes intention smallness he northward. Consisted we
  otherwise arranging commanded discovery it explained. Does cold even
  song like two yet been. Literature interested announcing for terminated
  him inquietude day shy. Himself he fertile chicken perhaps waiting if
  highest no it. Continued promotion has consulted fat improving not way.</p>


  <p>Yourself required no at thoughts delicate landlord it be. Branched
  dashwood do is whatever it. Farther be chapter at visited married in it
  pressed. By distrusts procuring be oh frankness existence believing
  instantly if. Doubtful on an juvenile as of servants insisted. Judge why
  maids led sir whose guest drift her point. Him comparison especially
  friendship was who sufficient attachment favourable how. Luckily but
  minutes ask picture man perhaps are inhabit. How her good all sang more
  why.</p>


  <p>Consider now provided laughter boy landlord dashwood. Often voice and
  the spoke. No shewing fertile village equally prepare up females as an.
  That do an case an what plan hour of paid. Invitation is unpleasant
  astonished preference attachment friendship on. Did sentiments
  increasing particular nay. Mr he recurred received prospect in. Wishing
  cheered parlors adapted am at amongst matters.</p>`

  public secondText: string = `<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>`

  constructor() { }

  ngOnInit(): void {
  }

}
