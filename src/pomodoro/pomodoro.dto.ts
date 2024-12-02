import {
  IsBoolean,
  IsNumber,
  IsOptional
} from 'class-validator';

export class PomodoroSessionDTO {
  @IsOptional()
  @IsBoolean()
  isCompleted: boolean;
}

export class PomodoroCycleDTO {
  @IsNumber()
  totalSeconds: number;

  @IsOptional()
  @IsBoolean()
  isCompleted: boolean;
}
