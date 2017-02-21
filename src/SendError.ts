export interface SendError {
  error: {
    message: string;
    type: string;
    code: number;
    error_subcode: number;
    fbtrace_id: string;
  };
}
