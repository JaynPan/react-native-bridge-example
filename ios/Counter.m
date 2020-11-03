//
//  Couter.m
//  testing
//
//  Created by 潘傑恩 on 2020/11/2.
//

#import "React/RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(Counter, NSObject)

RCT_EXTERN_METHOD(increment)
RCT_EXTERN_METHOD(getCount: (RCTResponseSenderBlock)callback)
RCT_EXTERN_METHOD(
  decrement: (RCTPromiseResolveBlock)resolve
  rejecter: (RCTPromiseRejectBlock)reject
)

@end

