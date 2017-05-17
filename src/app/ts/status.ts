/**
 * Created by n_ngo on 2017/05/02.
 */
export enum TaskStatusEnum {
  cancel,
  waiting,
  processing,
  review,
  done
}
export const TaskStatus:(string|number)[] = [
  TaskStatusEnum[TaskStatusEnum.cancel],
  TaskStatusEnum[TaskStatusEnum.waiting],
  TaskStatusEnum[TaskStatusEnum.processing],
  TaskStatusEnum[TaskStatusEnum.review],
  TaskStatusEnum[TaskStatusEnum.done],
];

