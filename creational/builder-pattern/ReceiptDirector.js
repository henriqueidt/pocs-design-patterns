export class ReceiptDirector {
  constructor() {}

  buildTransferReceipt(builder, sender, receiver, amount) {
    builder.setSender(sender).setReceiver(receiver).setAmount(amount);
    return builder.build();
  }

  buildDepositReceipt(builder, sender, amount) {
    builder.setSender(sender).setAmount(amount);
    return builder.build();
  }

  buildWithdrawReceipt(builder, receiver, amount) {
    builder.setReceiver(receiver).setAmount(amount);
    return builder.build();
  }
}
