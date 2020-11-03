//
//  CounterViewManager.m
//  testing
//
//  Created by 潘傑恩 on 2020/11/3.
//

#import <Foundation/Foundation.h>
#import "React/RCTViewManager.h"

@interface RCT_EXTERN_MODULE(CounterViewManager, RCTViewManager)
RCT_EXPORT_VIEW_PROPERTY(count, NSNumber)
RCT_EXPORT_VIEW_PROPERTY(onUpdate, RCTDirectEventBlock)
@end
