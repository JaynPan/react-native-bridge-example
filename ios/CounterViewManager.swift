//
//  CounterViewManager.swift
//  testing
//
//  Created by 潘傑恩 on 2020/11/3.
//

import Foundation

@objc(CounterViewManager)
class CounterViewManager: RCTViewManager {
  override func view() -> UIView! {
    let label = UILabel()
    label.text = "Swift Counter"
    label.textAlignment = .center
    return label
  }
}
