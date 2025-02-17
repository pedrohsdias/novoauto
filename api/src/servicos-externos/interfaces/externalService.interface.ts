export interface IExternalService {

  sendData<T, R>(data: T): Promise<R>;

  fetchData<T, R>(data: T): Promise<R>;

  hasError(): boolean;
}
