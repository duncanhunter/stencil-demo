import { NgModule } from "@angular/core";
import { DIRECTIVES } from "./lib/stencil-generated";
import { TextValueAccessor } from "./lib/stencil-generated/text-value-accessor";

@NgModule({
  declarations: [...DIRECTIVES, TextValueAccessor],
  exports: [...DIRECTIVES, TextValueAccessor],
})
export class StencilDemoModule {}
