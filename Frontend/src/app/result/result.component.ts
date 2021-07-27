import { expressionType } from "@angular/compiler/src/output/output_ast";
import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";


@Component
({
    selector: 'app-result',
    templateUrl: './result.component.html',
    styleUrls: ['./result.component.scss']
})

export class ResultComponent
{
    result;
    ratio;
        constructor(private router:Router)
        {
            this.result = this.router.getCurrentNavigation().extras.state.result;
            this.ratio = this.router.getCurrentNavigation().extras.state.ratio;
        }
}