import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Step } from '../../models/step.model';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepComponent {
  @Input() step: Step = {
    step: 0,
    title: '',
    description: '',
    path: '',
  };
  @Input() showInfo = false;

  @Output() selected: EventEmitter<Step> = new EventEmitter();
}
