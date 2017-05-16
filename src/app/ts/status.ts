/**
 * Created by n_ngo on 2017/05/02.
 */
export enum TaskStatusEnum {
  done,
  processing,
  cancel,
  waiting
}
export const TaskStatus:(string|number)[] = [
  TaskStatusEnum[TaskStatusEnum.done],
  TaskStatusEnum[TaskStatusEnum.processing],
  TaskStatusEnum[TaskStatusEnum.cancel],
  TaskStatusEnum[TaskStatusEnum.waiting],
];

