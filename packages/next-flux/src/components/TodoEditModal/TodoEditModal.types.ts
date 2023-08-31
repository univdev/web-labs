export interface TodoEditModalProps {
  initialContent?: string;
  initialIsDone?: boolean;
  // 활성화
  show?: boolean;

  closeClear?: boolean;
  // 열기
  onOpen?: () => any;
  // 닫기
  onClose?: () => any;
  // 취소
  onCancel?: () => any;
  // confirm 버튼을 눌렀을 때
  onConfirm?: (result: { content: string, isDone: boolean }) => any;
}
